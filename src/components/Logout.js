import React from "react"
import { useGlobalState } from "../modules/store"
import { Link } from "react-router-dom"

export default function Logout({style}) {
    const { dispatch } = useGlobalState()
    const onClick = () => {
        dispatch({
            type: "setSession",
            data: {user: null, token: null}
        })
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }
    return (
        <Link to="" data-cy="logoutbutton" onClick={event => onClick(event)} style={style} >Logout</Link>
    )
}