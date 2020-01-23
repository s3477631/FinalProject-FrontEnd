import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"

// seeds
import breakSchedules from "../modules/seeds"

export default function ManagerViewView() {

    const [ schedule, setSchedule ] = useState(null)

    function getData() { // change this to work with date onChange
        
        // retrive date in date picker 
        let date = document.getElementById('date-select').value
        // convert from YYYY-MM-DD to DD/MM/YYYY
            .split("-")
            .reverse()
            .join("/")

        // actual code when data comes back in correct format

        // axios({
        //     method: 'post',
        //     url: "https://boiling-inlet-28252.herokuapp.com/today",
        //     data: { date }
        // })
        // .then(response => {
        //     setSchedule(Object.values(response.data[0]))
        // }).catch(error => {
        //     setSchedule("There's nothing here!")
        // })

        // temp code to fill table
        console.log(breakSchedules[date])
        setSchedule(breakSchedules[date])
    }

    return (
        <>
            <ManagerNav renderDateSelect />
            <button onClick={()=>getData()}>Click me</button>
            <table>
                <thead>
                    <th>Employee</th>
                    <th>Scheduled Time</th>
                    <th>Duration</th>
                    <th>Floater</th>
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











