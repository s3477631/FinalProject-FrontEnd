import React from "react"
import { useGlobalState } from "../modules/store"
import axios from "axios"
import styled from "styled-components"

const CenterScreen = styled.div`
    text-align: center;
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default function LoginView() {

    const { dispatch } = useGlobalState()

    const onSubmit = async (event) => {
        event.preventDefault()
        const elements = event.target.elements
        const username = elements[0].value
        const password = elements[1].value

        console.log(username)
        // retrieve token
        const user = {name: username}
        // const token = "lakjdf"
        const response = await axios.post("https://boiling-inlet-28252.herokuapp.com/auth/login", {email: username+"@mail.com", password})
        const token = response.data
        console.log(response)
        // .then(response => {
        //     console.log(response)
        //     return response
        // })
        dispatch({
            type: "setSession",
            data: {user, token}
        })
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", "Bearer " + token)
        
        
        // dispatch({
        //     type: "setSession",
        //     data: {user, token}
        // })
        // localStorage.setItem("user", JSON.stringify(user))
        // localStorage.setItem("token", token)
        
    }

    return (
        <CenterScreen>
            <h1>Break Scheduler</h1>
            <form onSubmit={(event) => onSubmit(event)}>
                <div>
                    <label>Username: </label>
                    <input name="username" />
                </div>
                <div style={{marginTop: "0.5rem", width: "100%"}}>
                    <label>Password: </label>
                    <input name="password" type="password" />
                </div>
                <button style={{marginTop: "1rem", width: "100%", height: "40px"}}>Login</button>
            </form>
        </CenterScreen>
    )
}