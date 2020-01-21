import React from "react"
import PrivateRoute from "./PrivateRoute"
import { Redirect } from "react-router-dom"
import { useGlobalState } from "./store"

// requires a token and user to be manager
export default function ManagerRoute(props) {
    const { store } = useGlobalState()
    const { user } = store
    console.log(user, user.name)
    if (!user || user.name !== "manager") {
        return <Redirect to="/" />
    }

    return <PrivateRoute {...props} />
}