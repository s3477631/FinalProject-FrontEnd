import React, { useState, useEffect } from "react"
import Break from "../components/Break"
import Logout from "../components/Logout"
import breakSchedules from "../modules/seeds"
import FloaterStats from "../styles/FloaterStats"
import BorderedDiv from "../styles/BorderedDiv"

export default function FloaterView() {

    const [ schedule, setSchedule ] = useState({
        totalFifteens: 0,
        totalThirties: 0,
        totalBreakTime: 0,
        goalTime: 960,
        breaks: []
    })

    const setDate = (date) => {
        
        // update value of date picker
        document.getElementById('floater-date').value = date

        // convert from YYYY-MM-DD to DD/MM/YYYY
        const formattedDate = date.split("-").reverse().join("/")

        // update state
        setSchedule(breakSchedules[formattedDate])
    }
    
    const onDateSelect = () => {
        setDate(document.getElementById('floater-date').value)
    }

    // on mount, set date to today and render
    useEffect(()=>{

        // comment this
        const today = new Date().toJSON().slice(0, 10)
        setDate(today)

    }, [])

    const onBreakFinishChecked = (breakDuration, isChecked) => {
        // recalculate total breaks
        const newTotal = (isChecked ? -breakDuration : breakDuration)
        console.log(isChecked)
        setSchedule({
            totalBreakTime: schedule.totalBreakTime += newTotal,
            ...schedule
        })
        // add to current time which give projected finish time
        // compare projected to goal
        // render something if projected beyond goal
    }

    return (
        <div style={{paddingBottom: 200}}>
            <Logout />
            <h1>Break Schedule</h1>
            <input type="date" id="floater-date" onChange={() => onDateSelect()}/>
            <select>
                <option value="1">Floater 1</option>
                <option value="2">Floater 2</option>
                <option value="3">Floater 3</option>
            </select>
            {
                schedule && schedule.breaks.map((breakData) => (
                    <Break {...breakData} onCheckChange={onBreakFinishChecked} />
                ))
            }
            <FloaterStats>
                <BorderedDiv>
                    <h4>Breaks Left:</h4>
                    <p>{schedule && schedule.totalFifteens} x 15min</p>
                    <p>{schedule && schedule.totalThirties} x 30min</p>
                    <p>{schedule && schedule.totalBreakTime / 60}hrs total</p>
                </BorderedDiv>
                <BorderedDiv>
                    <h4>Goal:</h4>
                    <p>{schedule && schedule.goalTime}</p>
                </BorderedDiv>
                <BorderedDiv>
                    <h4>Projected:</h4>
                    <p>{schedule && schedule.totalBreakTime}</p>
                </BorderedDiv>
            </FloaterStats>
        </div>
    )
}

