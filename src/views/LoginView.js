import React from "react"
import { useGlobalState } from "../modules/store"
//import axios from "axios"

export default function LoginView() {

    const { dispatch } = useGlobalState()

    const onSubmit = (event) => {
        event.preventDefault()
        const elements = event.target.elements
        const username = elements[0].value
        //const password = elements[1].value
        console.log(username)
        // retrieve token
        const user = {name: username}
        const token = "lakjdf"
        // const token = axios.post("https://boiling-inlet-28252.herokuapp.com/auth/login", {email: username+"@mail.com", password})
        // .then(response => {
        //     console.log(response)
        //     return response.json()
        // })
        // .then(({token}) => {
        //     console.log(token)
        //     dispatch({
        //         type: "setSession",
        //         data: {user, token}
        //     })
        //     localStorage.setItem("user", JSON.stringify(user))
        //     localStorage.setItem("token", token)
        // })
        // .catch(error => {
        //     console.log(error)
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