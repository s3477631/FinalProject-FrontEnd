import React, { useState, useEffect } from "react"
import BorderedTable, { BorderedTh, BorderedTd } from "../styles/TableStyles"
import { messageService } from "../modules/messageService"

export default function ManagerViewTable() {
    let [ schedule, setSchedule ] = useState(null)

    useEffect(() => {
        messageService.getMessage().subscribe(({message}) => {
            setSchedule(message)
        })
    }, [])

    return (
        <>
            { !schedule && <p style={{color: "red"}}>A break schedule has not been generated for this day.</p> }
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