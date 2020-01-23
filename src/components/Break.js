import React, { useState, useEffect } from "react"
import ordinal from "ordinal"
import prettyMs from "pretty-ms"
import BreakGrid from "../styles/BreakGrid"

export default function Break(props) {

    const [ elapsedTime, setElapsedTime ] = useState(0)
    const [ started, setStarted ] = useState(null)

    const breakTitle = `${props.employee}'s ${ordinal(props.breakNum || 1)} ${props.duration}`
    const scheduledTime = `${props.startTime}-${props.endTime}`
    const elapsedTimeString = prettyMs(elapsedTime, {colonNotation: true, secondsDecimalDigits: 0})

    const onStartChecked = () => {
        !started && setStarted(Date.now())
    }

    const onFinishChecked = () => {
        setStarted(false)
    }

    useEffect(()=>{
        started && setTimeout(()=>{
            setElapsedTime(Date.now()-started)
        }, 1000)
    })

    console.log(started)
    return (
        <BreakGrid>
            <h4>{breakTitle}</h4>
            <div></div>
            <p>{scheduledTime}</p>
            <input type="checkbox" id="startCheckBox" onChange={()=>onStartChecked()}/>
            <p>{elapsedTimeString}</p>
            <input type="checkbox" id="finishCheckBox" onChange={()=>onFinishChecked()}/>
            <p>Started</p>
            <p>Time Elapsed</p>
            <p>Finished</p>
        </BreakGrid>
    )
}