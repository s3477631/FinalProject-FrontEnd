import React from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"
import styled from "styled-components"

export default function ManagerNav({renderDateSelect, onChange, defaultValue}) {

    const Flex = styled.div`
        display: flex;
    `

    return (
        <>
            <Flex>
                {console.log('im being rerendered')}
                <Link to="/upload"><button>UPLOAD</button></Link>
                <Link to="/stats"><button>STATS</button></Link>
                <Link to="/view"><button>VIEW</button></Link>
                {renderDateSelect ? <input defaultValue={defaultValue} type="date" id="date-select" onChange={(event) => onChange(event)}/> : null}
                <Logout style={{marginLeft: "auto"}}/>
            </Flex>
            <h1>Break Scheduler</h1>
        </>
    )

}