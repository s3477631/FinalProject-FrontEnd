import React from "react"
import { useGlobalState } from "../modules/store"

export default function LoginView() {

    const { dispatch } = useGlobalState()

    const onSubmit = (event) => {
        event.preventDefault()
        const elements = event.target.elements
        const username = elements[0].value
        // const password = elements[1] //should check for match

        // retrieve token
        const token = "random"
        const user = {name: username}
        // update state
        // dispatch({
        //     type: "setToken",
        //     data: token
        // })
        // dispatch({
        //     type: "setUser",
        //     data: user,
        // })
        dispatch({
            type: "setSession",
            data: {user, token}
        })
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
    }

    return (
        <>
        <h1>Break Scheduler</h1>
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label>Username:</label>
                <input name="username" />
            </div>
            <div>
                <label>Password:</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}