import React, { useReducer } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FloaterView from "../views/FloaterView"
import LoginView from "../views/LoginView"
import ManagerUploadView from "../views/ManagerUploadView"
import ManagerStatsView from "../views/ManagerStatsView"
import ManagerViewView from "../views/ManagerViewView"
import stateReducer from "../modules/stateReducer"
import { StateContext } from "../modules/store"
import PrivateRoute from "./PrivateRoute"
import ManagerRoute from "./ManagerRoute"

export default function App() {

    const initialState = {
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
    }

    const [ store, dispatch ] = useReducer(stateReducer, initialState)
    const { user } = store
    
    return (
        <StateContext.Provider value={{store, dispatch}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        { 
                            user && user.name === "manager" ? <Redirect to="/upload" />
                            : user && user.name === "floater" ? <Redirect to="/floater" />
                            : <LoginView />
                        }
                    </Route>
                    <PrivateRoute path="/floater">
                        <FloaterView />
                    </PrivateRoute>
                    <ManagerRoute path="/upload">
                        <ManagerUploadView />
                    </ManagerRoute>
                    <ManagerRoute path="/view">
                        <ManagerViewView />
                    </ManagerRoute>
                    <ManagerRoute path="/stats">
                        <ManagerStatsView />
                    </ManagerRoute>
                </Switch>
            </BrowserRouter>
        </StateContext.Provider>
    )
}

