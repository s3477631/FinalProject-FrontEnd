import React, { useState, useEffect } from "react"
import Break from "../components/Break"
import Logout from "../components/Logout"
import breakSchedules from "../modules/seeds"
import FloaterStats from "../styles/FloaterStats"
import BorderedDiv from "../styles/BorderedDiv"
import moment from "moment"

export default function FloaterView() {

    const [ schedule, setSchedule ] = useState({
        totalFifteens: 0,
        totalThirties: 0,
        totalBreakTime: 0,
        goalTime: 960,
        breaks: []
    })

    const projectedTimeMs = Date.now() + schedule.totalBreakTime * 60 * 1000
    const goalTimeMs = new Date().setHours(0,0,0,0) + schedule.goalTime * 60 * 1000
    const displayProjectedTime = moment(projectedTimeMs).format("h:mm a")
    const displayGoalTime = moment(goalTimeMs).format("h:mm a")

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
        let newFifteens = schedule.totalFifteens
        let newThirties = schedule.totalThirties

        if (breakDuration == 15) {
            if (isChecked) {
                newFifteens -=1
            } else {
                newFifteens +=1
            }
        } else {
            if (isChecked) {
                newThirties -=1
            } else {
                newThirties +=1
            }
        }
        console.log(newFifteens, newThirties)

        setSchedule({
            ...schedule,
            totalBreakTime: schedule.totalBreakTime += newTotal,
            totalFifteens: newFifteens,
            totalThirties: newThirties
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
                    <p>{schedule && displayGoalTime}</p>
                </BorderedDiv>
                <BorderedDiv>
                    <h4>Projected:</h4>
                    <p>{schedule && displayProjectedTime}</p>
                </BorderedDiv>
            </FloaterStats>
        </div>
    )
}

