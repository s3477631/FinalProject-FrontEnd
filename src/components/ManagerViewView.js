import React, { useState } from "react"
import ManagerNav from "./ManagerNav"
import axios from "axios"
export default function ManagerViewView() {

    const [ schedule, setSchedule ] = useState(null)

    function getData() {
        
        // retrive date in date picker 
        let date = document.getElementById('date-select').value
        // convert from YYYY-MM-DD to DD/MM/YYYY
            .split("-")
            .reverse()
            .join("/")

        axios({
            method: 'post',
            url: "https://boiling-inlet-28252.herokuapp.com/today",
            data: { date }
        })
        .then(response => {
            setSchedule(Object.values(response.data[0]))
            //console.log(response.data[0].values())
        }).catch(error => {
            setSchedule("There's nothing here!")
        })

    }

    return (
        <>
            <ManagerNav />
            <button onClick={()=>getData()}>Click me</button>
            <p>{schedule}</p>
            <table>
                <thead>
                    <th>Employee</th>
                    <th>Scheduled Time</th>
                    <th>Duration</th>
                    <th>Floater</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Zach</td>
                        <td>10:00-10:15</td>
                        <td>15</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Jack</td>
                        <td>10:00-10:15</td>
                        <td>15</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Zach</td>
                        <td>10:00-10:15</td>
                        <td>15</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Jack</td>
                        <td>10:00-10:15</td>
                        <td>15</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Zach</td>
                        <td>10:00-10:15</td>
                        <td>15</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Jack</td>
                        <td>10:00-10:15</td>
                        <td>15</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}











