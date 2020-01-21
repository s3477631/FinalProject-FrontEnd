import React, { useState } from "react"
import { useGlobalState } from "./store"

export default function LoginView() {

    // const { loginDetails, loginDispatch } = useReducer((state, action) => {

    // }, null)
    const { dispatch } = useGlobalState()

    const onSubmit = (event, username, pass) => {
        event.preventDefault()
        // retrieve token
        const token = "ASDF"
        onLogin(token, username)
    }

    const onChange = event => {
        
    }

    const onLogin = (token, username) => {
        dispatch({
            type: "setToken",
            data: token
        })
        dispatch({
            type: "setUser",
            data: {name: username},
        })
    }

    return (
        <>
        <h1>Break Scheduler</h1>
        <form>
            <div>
                <label for="username">Username:</label>
                <input name="username" onChange={event => onChange(event)} />
            </div>
            <div>
                <label for="password">Password:</label>
                <input name="password" type="password" onChange={event => onChange(event)}/>
            </div>
            <button onClick={(event) => onSubmit(event, "floater", "password")}>Submit</button>
        </form>
        </>
    )
}