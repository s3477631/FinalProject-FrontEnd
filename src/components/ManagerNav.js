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