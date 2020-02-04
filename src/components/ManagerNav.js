import React from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"

export default function ManagerNav(props) {

    return (
        <>
            <Link data-cy="navuploadbutton" to="/upload"><button>UPLOAD</button></Link>
            <Link data-cy="navstatsbutton" to="/stats"><button>STATS</button></Link>
            <Link data-cy="navviewbutton" to="/view"><button>VIEW</button></Link>
            {props.renderDateSelect ? <input type="date" id="date-select"/> : null}
            <Logout data-cy="loggoutbutton" />
            <h1>Break Scheduler</h1>
        </>
    )
}