import React from "react"
import ManagerNav from "./ManagerNav"
import axios from "axios"
export default function ManagerViewView() {
    const getData = () => {
        console.log("clicked!")
        // axios.get("http://boiling-inlet-28252.herokuapp.com/today", {
        //     headers: {"content-type": "application/x-www-form-urlencoded"},
        //     data: {date: '"12/12/2089"'}
        // }).then(data => console.log(data))

        axios({
            method: 'post',
            url: "https://boiling-inlet-28252.herokuapp.com/today",
            data: { date:  "\"12/12/2089\""}
          }).then(response => console.log(response))
    }
    return (
        <>
            <ManagerNav />
            <button onClick={()=>getData()}>Click me</button>
            <p></p>
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











