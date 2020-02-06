import React, { useState, useEffect } from "react"
import ordinal from "ordinal"
import prettyMs from "pretty-ms"
import BreakGrid, { BreakHeader, ScheduledTime, CenteredCell, ElapsedTime } from "../styles/BreakStyles"
import FakeCheckbox from "./FakeCheckbox"
import axios from "axios"
// the initial state needs to pull from the parent
export default function Break({employee, breakNum, duration, startTime, endTime, onCheckChange,
    initialElapsed, initialStarted, initialFinished}) {

    const [ elapsedTime, setElapsedTime ] = useState(initialElapsed) // axios
    const [ started, setStarted ] = useState(initialStarted) // axios
    const [ finished, setFinished ] = useState(initialFinished) // axios

    const breakTitle = `${employee}'s ${ordinal(breakNum || 1)} ${duration}`
    const scheduledTime = `${startTime}-${endTime}`
    const elapsedTimeString = prettyMs(elapsedTime, {colonNotation: true, secondsDecimalDigits: 0})

// just going to put a button here for now:- put the code in the function below inside of the onStartChecked

const tempButton = event => { 
    axios.post("http://localhost:3002/checked/start")
    .then(response => console.log(response))
    .catch(err => console.error(err))
}


    const onStartChecked = event => {

        // post, store start time



        const checked = event.target.checked
        checked ? setStarted(Date.now()) : setStarted(checked)

  
        

    }

    let myTimeout = null

    const onFinishChecked = event => {

        // post, store finish time and time elapsed


        clearTimeout(myTimeout)

        const checked = event.target.checked
        setFinished(checked)
        onCheckChange(duration, checked)
        
    }

    useEffect(()=>{
        myTimeout = started && !finished && setTimeout(()=>{
            setElapsedTime(Date.now()-started)
        }, 1000)
    })

    return (
        <BreakGrid started={started} finished={finished}>
            <BreakHeader><h3>{breakTitle}</h3></BreakHeader>
            <ScheduledTime><h3>{scheduledTime}</h3></ScheduledTime>
            <CenteredCell>
                <button onClick={tempButton}>TEST</button>
                {/* <input type="checkbox" onChange={e=>onStartChecked(e)}/> */}
                <FakeCheckbox onChange={onStartChecked}/>
            </CenteredCell>
            <CenteredCell>
                <ElapsedTime>{elapsedTime > 0 ? 0 + elapsedTimeString : "00:00"}</ElapsedTime>
            </CenteredCell>
            <CenteredCell>
                <FakeCheckbox onChange={onFinishChecked}/>
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