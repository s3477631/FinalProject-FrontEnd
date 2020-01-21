import React from "react"
import { Link } from "react-router-dom"

export default function ManagerNav(props) {
    return (
        <>
            <Link to="/upload"><button>UPLOAD</button></Link>
            <Link to="/stats"><button>STATS</button></Link>
            <Link to="/view"><button>VIEW</button></Link>
            <h1>Break Scheduler</h1>
        </>
    )
}