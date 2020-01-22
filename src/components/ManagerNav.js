import React, { useState } from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"

export default function ManagerNav(props) {

    return (
        <>
            <Link to="/upload"><button>UPLOAD</button></Link>
            <Link to="/stats"><button>STATS</button></Link>
            <Link to="/view"><button>VIEW</button></Link>
            <input type="date" id="date-select"/>
            <Logout />
            <h1>Break Scheduler</h1>
        </>
    )
}