import React, { useState, useEffect } from "react"
import ordinal from "ordinal"
import prettyMs from "pretty-ms"
import BreakGrid, { BreakHeader, ScheduledTime, CenteredCell, ElapsedTime } from "../styles/BreakStyles"
import FakeCheckbox from "./FakeCheckbox"

export default function Break({employee, breakNum, duration, startTime, endTime, onCheckChange}) {

    const [ elapsedTime, setElapsedTime ] = useState(0)
    const [ started, setStarted ] = useState(null)
    const [ finished, setFinished ] = useState(null)

    const breakTitle = `${employee}'s ${ordinal(breakNum || 1)} ${duration}`
    const scheduledTime = `${startTime}-${endTime}`
    const elapsedTimeString = prettyMs(elapsedTime, {colonNotation: true, secondsDecimalDigits: 0})

    const onStartChecked = event => {
        const checked = event.target.checked
        checked ? setStarted(Date.now()) : setStarted(checked)
    }

    const onFinishChecked = event => {
        //debugger
        const checked = event.target.checked
        setFinished(checked)
        onCheckChange(duration, checked)
    }

    useEffect(()=>{
        started && !finished && setTimeout(()=>{
            setElapsedTime(Date.now()-started)
        }, 1000)
    })

    return (
        <BreakGrid started={started} finished={finished}>
            <BreakHeader><h3>{breakTitle}</h3></BreakHeader>
            <ScheduledTime><h3>{scheduledTime}</h3></ScheduledTime>
            <CenteredCell>
                {/* <input type="checkbox" onChange={e=>onStartChecked(e)}/> */}
                <FakeCheckbox onChange={e=>onStartChecked(e)}/>
            </CenteredCell>
            <CenteredCell>
                <ElapsedTime>{elapsedTimeString}</ElapsedTime>
            </CenteredCell>
            <CenteredCell>
                <input type="checkbox" onChange={e=>onFinishChecked(e)}/>
            </CenteredCell>
            <CenteredCell>
                <p>Started</p>
            </CenteredCell>
            <CenteredCell>
                <p>Time Elapsed</p>
            </CenteredCell>
            <CenteredCell>
                <p>Finished</p>
            </CenteredCell>
        </BreakGrid>
    )
}