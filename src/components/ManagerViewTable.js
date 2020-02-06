import React from "react"
import BorderedTable, { BorderedTh, BorderedTd } from "../styles/TableStyles"

export default function ManagerViewTable() {
    let schedule = null
    return (
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
    )
}