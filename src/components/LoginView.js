import React, { useReducer } from "react"
import { useGlobalState } from "./store"

export default function LoginView() {
    
    const initialState = {
        username: null,
        password: null
    }

    const { dispatch } = useGlobalState()

    const onSubmit = (event) => {
        event.preventDefault()
        const elements = event.target.elements
        const username = elements[0].value
        const password = elements[1]

        debugger
        // retrieve token
        const token = "ASDF"
        onLogin(token, username)
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
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label for="username">Username:</label>
                <input name="username" />
            </div>
            <div>
                <label for="password">Password:</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}