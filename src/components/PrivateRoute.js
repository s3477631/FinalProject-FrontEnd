import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalState } from "../modules/store"

// only allow user through with a token
export default function PrivateRoute(props) {
    
    const { store } = useGlobalState()
    const { token } = store

    if (!token) {
        return <Redirect to="/" />
    }
    
    return (
        <Route {...props} />
    )

}