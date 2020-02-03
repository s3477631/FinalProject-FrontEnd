import React, { useState } from "react" 
import ManagerNav from "../components/ManagerNav"
// import axios from "axios"
import today, {yesterday} from "../modules/dateHelper"
import BorderedTable, { BorderedTh, BorderedTd } from "../styles/TableStyles"

// seeds
import breakSchedules from "../modules/seeds"
import { useEffect } from "react"

export default function ManagerViewView() {

    // const [ schedule, setSchedule ] = useState(null)

    const setDate = (event) => {
        
        // // update value of date picker
        // const date = document.getElementById('date-select').value

        // // convert from YYYY-MM-DD to DD/MM/YYYY
        // const formattedDate = date.split("-").reverse().join("/")

        // // update state

        // setSchedule(breakSchedules[formattedDate]?.breaks)

        // console.log("setdate")
    }

    let date = null
    let schedule = null
    
    useEffect(()=>{
        date = document.getElementById('date-select')
        schedule = breakSchedules[date.value]?.breaks
    }, [])

    return (
        <>
            <ManagerNav renderDateSelect onChange={setDate} defaultValue={today}/>
            {
                !schedule && <p style={{color: "red"}}>A break schedule has not been generated for this day.</p>
            }
            <BorderedTable>
                <thead>
                    <tr>
                        <BorderedTh>Employee</BorderedTh>
                        <BorderedTh>Scheduled Time</BorderedTh>
                        <BorderedTh>Duration</BorderedTh>
                        <BorderedTh>Floater</BorderedTh>
                    </tr>
                </thead>
                <tbody>
                    {
                        schedule && schedule.map((breakData, i) => (
                            <tr key={i}>
                                <BorderedTd>{breakData.employee}</BorderedTd>
                                <BorderedTd>{`${breakData.startTime}-${breakData.endTime}`}</BorderedTd>
                                <BorderedTd>{breakData.duration}</BorderedTd>
                                <BorderedTd>{breakData.floater}</BorderedTd>
                            </tr>
                        ))
                    }
                </tbody>
            </BorderedTable>
        </>
    )
}











