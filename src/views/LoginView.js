import React from "react"
import { useGlobalState } from "../modules/store"
import axios from "axios"
export default function LoginView() {

    const { dispatch } = useGlobalState()

    const onSubmit = (event) => {
        const elements = event.target.elements
        const username = elements[0].value
        const password = elements[1].value //should check for match

        // retrieve token
        const token = "random"
        const user = {name: username}
        axios({
            method: 'post',
            url: 'https://boiling-inlet-28252.herokuapp.com/auth/login',
            data: {
                 email: username + '@test.com',
                password: password
            }
          }).then(response => localStorage.setItem("token", response.data))
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
        // localStorage.setItem("token", token)
    }

    return (
        <>
        <h1>Break Scheduler</h1>
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label>Username:</label>
                <input name="username" data-cy="username" />
            </div>
            <div>
                <label>Password:</label>
                <input name="password" data-cy="password" type="password" />
            </div>
            <button data-cy="loginButton">Submit</button>
        </form>
        </>
    )
}