import React, { useState, useEffect } from "react"
import ordinal from "ordinal"
import prettyMs from "pretty-ms"

export default function Break(props) {
    const [ elapsedTime, setElapsedTime ] = useState(0)
    const [ started, setStarted ] = useState(null)
    const breakTitle = `${props.employee}'s ${ordinal(props.breakNum)} ${props.duration}`
    const scheduledTime = `${props.startTime}-${props.endTime}`

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
        <div style={{borderStyle: 'solid'}}>
            <h4 className="break-title">{breakTitle}</h4>
            <p className="scheduled-time">{scheduledTime}</p>
            <input type="checkbox" id="startCheckBox" onChange={()=>onStartChecked()}/>
            <p className="time-elapsed">{prettyMs(elapsedTime, {colonNotation: true, secondsDecimalDigits: 0})}</p>
            <input type="checkbox" id="finishCheckBox" onChange={()=>onFinishChecked()}/>
            <p>Started</p>s
            <p>Time Elapsed</p>
            <p>Finished</p>
        </div>
    )
}