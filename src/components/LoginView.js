import React, { useReducer } from "react"
import { useGlobalState } from "./store"

export default function LoginView() {
    
    const initialState = {
        username: null,
        password: null
    }

    const { loginDetails, loginDispatch } = useReducer((state, action) => {
        switch (action.type) {
            case "setUsername": {
                return {
                    ...state,
                    username: action.data
                }
            }
            case "setPassword": {
                return {
                    ...state, 
                    password: action.data
                }
            }
        }
    }, initialState)

    const { dispatch } = useGlobalState()

    const onSubmit = (event) => {
        event.preventDefault()
        const elements = event.target.elements
        const username = elements[0]
        const password = elements[1]

        debugger
        // retrieve token
        const token = "ASDF"
        onLogin(token, username)
    }

    const onChange = (event, action) => {
        loginDispatch({
            type: action,
            data: event.value
        })
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
                <input name="username" onChange={event => onChange(event, "setUsername")} />
            </div>
            <div>
                <label for="password">Password:</label>
                <input name="password" type="password" onChange={event => onChange(event, "setPassword")}/>
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}