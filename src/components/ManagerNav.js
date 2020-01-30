import React from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"

export default function ManagerNav({renderDateSelect, onChange, defaultValue}) {

    return (
        <>
            <Link to="/upload"><button>UPLOAD</button></Link>
            <Link to="/stats"><button>STATS</button></Link>
            <Link to="/view"><button>VIEW</button></Link>
            {renderDateSelect ? <input defaultValue={defaultValue} type="date" id="date-select" onChange={onChange}/> : null}
            <Logout />
            <h1>Break Scheduler</h1>
        </>
    )
}