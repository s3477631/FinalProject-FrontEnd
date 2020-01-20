import React from "react"
import ManagerNav from "./ManagerNav"

export default function ManagerViewView() {
    return (
        <>
            <ManagerNav />
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