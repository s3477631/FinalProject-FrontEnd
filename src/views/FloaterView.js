import React, { useState, useEffect } from "react"
import Break from "../components/Break"
import Logout from "../components/Logout"
import breakSchedules from "../modules/seeds"

export default function FloaterView() {

    const [ schedule, setSchedule ] = useState(null)
    
    const onDateSelect = () => {

        // retrive date in date picker 
        let date = document.getElementById('floater-date').value
        // convert from YYYY-MM-DD to DD/MM/YYYY
            .split("-")
            .reverse()
            .join("/")
        
        setSchedule(breakSchedules[date])
    }
    
    useEffect(()=>{

        let date = new Date().toJSON().slice(0, 10)
        document.getElementById('floater-date').value = date
        
        // convert from YYYY-MM-DD to DD/MM/YYYY
        date = date
            .split("-")
            .reverse()
            .join("/")
        
        setSchedule(breakSchedules[date])

    }, [])

    return (
        <>
            <Logout />
            <h1>Break Schedule</h1>
            <input type="date" id="floater-date" onChange={() => onDateSelect()}/>
            <select>
                <option value="1">Floater 1</option>
                <option value="2">Floater 2</option>
                <option value="3">Floater 3</option>
            </select>
            {
                schedule && schedule.map((breakData) => (
                    <Break {...breakData} />
                ))
            }
            <div class="floater-stats">
                <div class="breaks-left" style={{borderStyle: "solid"}}>
                    <h4>Breaks Left:</h4>
                    <p class="fifteens">20 x 15 min</p>
                    <p class="thirties">10 x 30 min</p>
                    <p class="total">10hrs total</p>
                </div>
                <div class="goal" style={{borderStyle: "solid"}}>
                    <h4>Goal:</h4>
                    <p>4:00pm</p>
                </div>
                <div class="projected" style={{borderStyle: "solid"}}>
                    <h4>Projected:</h4>
                    <p>3:30pm</p>
                </div>
            </div>
        </>
    )
}

