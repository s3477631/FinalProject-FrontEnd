import React from "react"
import { useGlobalState } from "./store"
import { Link } from "react-router-dom"

export default function Logout() {
    //event.preventDefault()
    const { dispatch } = useGlobalState()
    const onClick = () => {
        dispatch({
            type: "setUser", 
            data: null
        })
        dispatch({
            type: "setToken", 
            data: null
        })
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }
    return (
        <Link onClick={event => onClick(event)}>Logout</Link>
    )
}