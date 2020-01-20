import React from "react"

export default function LoginView() {
    return (
        <>
        <h1>Break Scheduler</h1>
        <form>
            <div>
                <label for="username">Username:</label>
                <input name="username" />
            </div>
            <div>
                <label for="password">Password:</label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}