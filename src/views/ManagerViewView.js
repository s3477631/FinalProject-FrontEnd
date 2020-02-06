import React from "react" 
import ManagerNav from "../components/ManagerNav"
// import axios from "axios"
import today from "../modules/dateHelper"
import { interval } from "rxjs"
import ManagerViewTable from "../components/ManagerViewTable"

// seeds
import breakSchedules from "../modules/seeds"
import { useEffect } from "react"

export default function ManagerViewView() {

    let schedule = null

    return (
        <>
            <ManagerNav renderDateSelect defaultValue={today}/>
            <ManagerViewTable />
        </>
    )
}











