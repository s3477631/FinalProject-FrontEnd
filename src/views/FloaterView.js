import React, { useReducer, useEffect } from "react"
import Break from "../components/Break"
import Logout from "../components/Logout"
import breakSchedules from "../modules/seeds"
import FloaterStatsGrid, { FloatHeader, FloatStatHeader, BreaksList, StatCell, ProjectedTimeCell, WarningCell } from "../styles/FloaterViewStyles"
import moment from "moment"
import floatReducer from "../modules/floatReducer"
import today from "../modules/dateHelper"

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
    selectedFloater: 1,
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
            data: newSchedule || initialState,
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

    useEffect(()=>{
        // update projected every minute
        setTimeout(()=>{
            dispatchFloatData({
                type: "updateProjected",
            })
        }, 60000)
    }, [floatData.projectedTimeMs])

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
                <option key={i} value={i}>Floater {i}</option>
            )
        }
        return options
    }

    return (
        <div style={{paddingBottom: 200}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <FloatHeader>Break Schedule</FloatHeader>  
                <input type="date" id="floater-date" onChange={onDateSelect} defaultValue={today} style={{fontSize: "18px", fontFamily: "roboto", width: "150px", marginLeft: "1rem"}}/>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "0.5rem"}}>
                <select onChange={onFloaterSelect} value={floatData.selectedFloater} defaultValue={1} style={{fontSize: "16px"}}>
                    {
                        floatData && getFloaterOptions()
                    }
                </select>
                <Logout style={{marginLeft: "auto"}}/>
            </div>
            {
                floatData && floatData.breaks.map((breakData, index) => (
                    floatData.selectedFloater === breakData.floater 
                        && <Break key={index} {...breakData} onCheckChange={onBreakFinishChecked} />
                ))
            }
            <FloaterStatsGrid>
                { floatData && floatData.projectedIsPastGoal && <WarningCell>Seek asistance from manager</WarningCell> }
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

