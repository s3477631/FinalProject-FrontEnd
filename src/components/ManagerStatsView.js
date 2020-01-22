import React from "react"
import ManagerNav from "./ManagerNav"

export default function ManagerStatsView(props) {
    return (
        <>
            <ManagerNav navigateTo={props.navigateTo}/>
            <table>
                <thead>
                    <th>Statistic</th>
                    <th>Value</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Manager Assistance</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Total 15 min breaks</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Total 30 min breaks</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Goal Finish Time</td>
                        <td>4pm</td>
                    </tr>
                    <tr>
                        <td>Actual Finish Time</td>
                        <td>4:15pm</td>
                    </tr>
                    <tr>
                        <td>Time Difference</td>
                        <td>+15mins</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}