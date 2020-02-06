import React, { useState } from "react" 
import ManagerNav from "../components/ManagerNav"
// import axios from "axios"
import today, { yesterday } from "../modules/dateHelper"
import BorderedTable, { BorderedTh, BorderedTd } from "../styles/TableStyles"
import { interval } from "rxjs"
import ManagerViewTable from "../components/ManagerViewTable"

// seeds
import breakSchedules from "../modules/seeds"
import { useEffect } from "react"

export default function ManagerViewView() {

    // const [ schedule, setSchedule ] = useState(null)

    let date = null
    let schedule = null
    const observable = interval(1000);
    // const subscription = observable.subscribe(setDate)
    // console.log(subscription)

    function getSchedule() {
        return schedule
    }
    
    useEffect(()=>{
        date = document.getElementById('date-select')
        schedule = breakSchedules[date.value]?.breaks           
    }, [])

    return (
        <>
            <ManagerNav renderDateSelect onChange={()=>{}} defaultValue={today}/>
            {
                !schedule && <p style={{color: "red"}}>A break schedule has not been generated for this day.</p>
            }
            <ManagerViewTable />
        </>
    )
}











