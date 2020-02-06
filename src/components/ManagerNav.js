import React from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"
import styled from "styled-components"

export default function ManagerNav({renderDateSelect, onChange, defaultValue}) {

    const Flex = styled.div`
        display: flex;
    `

    // const setDate = (event) => {
        
    //     // update value of date picker
    //     const date = document.getElementById('date-select').value

    //     // convert from YYYY-MM-DD to DD/MM/YYYY
    //     const formattedDate = date.split("-").reverse().join("/")

    //     // update state
    //     schedule = breakSchedules[formattedDate]?.breaks

    //     console.log(schedule)

    // }

    return (
        <>

            <Flex>
                {console.log('im being rerendered')}
                <Link data-cy="navuploadbutton" to="/upload"><button>UPLOAD</button></Link>
                <Link data-cy="navstatsbutton" to="/stats"><button>STATS</button></Link>
                <Link data-cy="navviewbutton" to="/view"><button>VIEW</button></Link>
                {renderDateSelect ? <input data-cy="floatdatepicker" defaultValue={defaultValue} type="date" id="date-select" onChange={()=>{}}/> : null}
                <Logout style={{marginLeft: "auto"}}/>
            </Flex>
            <h1>Break Scheduler</h1>
        </>
    )

}