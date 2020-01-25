import React, { useState, useEffect } from "react"
import ordinal from "ordinal"
import prettyMs from "pretty-ms"
import BreakGrid from "../styles/BreakGrid"

export default function Break({employee, breakNum, duration, startTime, endTime, onCheckChange}) {

    const [ elapsedTime, setElapsedTime ] = useState(0)
    const [ started, setStarted ] = useState(null)
    const [ finished, setFinished ] = useState(null)

    const breakTitle = `${employee}'s ${ordinal(breakNum || 1)} ${duration}`
    const scheduledTime = `${startTime}-${endTime}`
    const elapsedTimeString = prettyMs(elapsedTime, {colonNotation: true, secondsDecimalDigits: 0})

    const onStartChecked = () => {
        !started && setStarted(Date.now())
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
        <BreakGrid>
            <h4>{breakTitle}</h4>
            <div></div>
            <p>{scheduledTime}</p>
            <input type="checkbox" onChange={()=>onStartChecked()}/>
            <p>{elapsedTimeString}</p>
            <input type="checkbox" onChange={e=>onFinishChecked(e)}/>
            <p>Started</p>
            <p>Time Elapsed</p>
            <p>Finished</p>
        </BreakGrid>
    )
}