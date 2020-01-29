import React from "react"
import { useGlobalState } from "../modules/store"
import axios from "axios"

export default function LoginView() {

    const { dispatch } = useGlobalState()

    const onSubmit = (event) => {
        event.preventDefault()
        const elements = event.target.elements
        const email = elements[0].value
        const password = elements[1].value //should check for match

        // retrieve token
        const user = {name: email}
        const token = "lol" //axios.post("https://boiling-inlet-28252.herokuapp.com/auth/register", {email, password})
        // .then(response => {
        //     console.log(response)
        //     return response.json()
        // })
        // .then(({token}) => {
        //     console.log(token)
        //     // localStorage.setItem("user", JSON.stringify(user))
        //     // localStorage.setItem("token", token)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        // REMOVE THESE FROM GLOBAL REDUCER 
        // update state
        // dispatch({
        //     type: "setToken",
        //     data: token
        // })
        // dispatch({
        //     type: "setUser",
        //     data: user,
        // })
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        dispatch({
            type: "setSession",
            data: {user, token}
        })
        
    }

    return (
        <>
        <h1>Break Scheduler</h1>
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label>Username:</label>
                <input name="email" />
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