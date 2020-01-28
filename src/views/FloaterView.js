import React, { useReducer, useEffect } from "react"
import Break from "../components/Break"
import Logout from "../components/Logout"
import breakSchedules from "../modules/seeds"
import FloaterStatsGrid, { FloatHeader, FloatStatHeader, BreaksList, StatCell, ProjectedTimeCell } from "../styles/FloaterViewStyles"
import moment from "moment"

const floatReducer = (state, action) => {
    switch (action.type) {
        case "setSchedule": {
            console.log("setSchedule")
            const newSchedule = action.data
            const goalTimeMs = new Date().setHours(0,0,0,0) + newSchedule.goalTime * 60000
            const projectedTimeMs = Date.now() + newSchedule.totalBreakTime * 60000
            return {
                ...newSchedule,
                goalTimeMs,
                projectedTimeMs,
                projectedIsPastGoal: projectedTimeMs > goalTimeMs,
            }
        }
        case "updateBreaks": {
            const { totalFifteens, totalThirties, totalBreakTime } = action.data
            const projectedTimeMs = Date.now() + totalBreakTime * 60000
            console.log(state.projectedTimeMs, projectedTimeMs)
            return {
                ...state,
                totalFifteens, 
                totalThirties,
                totalBreakTime,
                projectedTimeMs,
                projectedIsPastGoal: projectedTimeMs > state.goalTimeMs,
            }
        }
        case "updateFloater": {
            return {
                ...state,
                selectedFloater: action.data,
            }
        }
        default: {
            return state
        }
    }
}

const initialState = {
    totalFifteens: 0,
    totalThirties: 0,
    totalBreakTime: 0,
    goalTime: 0,
    breaks: [],
    goalTimeMs: 0,
    projectedTimeMs: 0,
    projectedIsPastGoal: false,
    numFloaters: 0,
    selectedFloater: 0,
}

export default function FloaterView() {
    
    const [ floatData, dispatchFloatData ] = useReducer(floatReducer, initialState)
    
    const setDate = (date) => {
        
        // update value of date picker
        document.getElementById('floater-date').value = date

        // convert from YYYY-MM-DD to DD/MM/YYYY
        const formattedDate = date.split("-").reverse().join("/")

        // update state
        const newSchedule = breakSchedules[formattedDate]
        dispatchFloatData({
            type: "setSchedule",
            data: newSchedule,
        })

    }
    
    const setFloater = (floaterNum) => {
        dispatchFloatData({
            type: "updateFloater",
            data: floaterNum,
        })
    }

    const onDateSelect = () => {
        setDate(document.getElementById('floater-date').value)
    }

    const onFloaterSelect = event => {
        setFloater(event.target.value)
    }

    // on mount, set date to today and render
    useEffect(()=>{

        // get just the date out of new Date().toJSON
        const today = new Date().toJSON().slice(0, 10)
        setDate(today)

    }, [])

    const onBreakFinishChecked = (breakDuration, isChecked) => {
        
        // recalculate total breaks
        const newTotal = (isChecked ? -breakDuration : breakDuration)
        let newFifteens = floatData.totalFifteens
        let newThirties = floatData.totalThirties

        if (breakDuration === 15) {
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
        
        dispatchFloatData({
            type: "updateBreaks",
            data: {
                totalBreakTime: floatData.totalBreakTime += newTotal,
                totalFifteens: newFifteens,
                totalThirties: newThirties
            }
        })
        
        console.log("onBreakFinishChecked", newThirties, newFifteens)

    }

    const getFloaterOptions = () => {
        let options = []
        for (let i=1; i<=floatData.numFloaters; i++) {
            options.push(
                <option value={i}>Floater {i}</option>
            )
        }
        return options
    }

    return (
        <div style={{paddingBottom: 200}}>
            <Logout />
            <FloatHeader>Break Schedule</FloatHeader>
            <input type="date" id="floater-date" onChange={onDateSelect}/>
            <select onChange={onFloaterSelect}>
                {
                    floatData && getFloaterOptions()
                }
            </select>
            {
                floatData && floatData.breaks.map((breakData, index) => (
                    floatData.selectedFloater == breakData.floater && <Break key={index} {...breakData} onCheckChange={onBreakFinishChecked} />
                ))
            }
            <FloaterStatsGrid>
                <StatCell>
                    <FloatStatHeader>Breaks Left:</FloatStatHeader>
                    <BreaksList>
                        <li>{floatData && floatData.totalFifteens} x 15min</li>
                        <li>{floatData && floatData.totalThirties} x 30min</li>
                        <li>{floatData && floatData.totalBreakTime / 60}hrs total</li>
                    </BreaksList>
                </StatCell>
                <StatCell>
                    <FloatStatHeader>Goal:</FloatStatHeader>
                    <p>{floatData && moment(floatData.goalTimeMs).format("h:mm a")}</p>
                </StatCell>
                <ProjectedTimeCell projectedIsPastGoal={floatData.projectedIsPastGoal}>
                    <FloatStatHeader>Projected:</FloatStatHeader>
                    <p>{floatData && moment(floatData.projectedTimeMs).format("h:mm a")}</p>
                </ProjectedTimeCell>
            </FloaterStatsGrid>
        </div>
    )
}

