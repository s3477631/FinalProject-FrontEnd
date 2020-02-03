import React, { useState, useEffect } from "react"
import ManagerNav from "../components/ManagerNav"
// import axios from "axios"
import today from "../modules/dateHelper"

// seeds
import breakSchedules from "../modules/seeds"

export default function ManagerViewView() {

    const [ schedule, setSchedule ] = useState(null)

    const setDate = (date) => {
        
        // update value of date picker
        document.getElementById('date-select').value = date

        // convert from YYYY-MM-DD to DD/MM/YYYY
        const formattedDate = date.split("-").reverse().join("/")

        // update state
        setSchedule(breakSchedules[formattedDate] && breakSchedules[formattedDate].breaks)

        console.log("date was set")
    }

    const onDateSelect = () => {
        setDate(document.getElementById('date-select').value)
    }

    return (
        <>
            <ManagerNav renderDateSelect onChange={onDateSelect} defaultValue={today}/>
            {
                !schedule && <p style={{color: "red"}}>A break schedule has not been generated for this day.</p>
            }
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Scheduled Time</th>
                        <th>Duration</th>
                        <th>Floater</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schedule && schedule.map((breakData) => (
                            <tr>
                                <td>{breakData.employee}</td>
                                <td>{`${breakData.startTime}-${breakData.endTime}`}</td>
                                <td>{breakData.duration}</td>
                                <td>{breakData.floater}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}











