import React, { useReducer } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FloaterView from "./FloaterView"
import LoginView from "./LoginView"
import ManagerUploadView from "./ManagerUploadView"
import ManagerStatsView from "./ManagerStatsView"
import ManagerViewView from "./ManagerViewView"
import stateReducer from "./stateReducer"
import { StateContext } from "./store"
import PrivateRoute from "./PrivateRoute"

export default function App() {

    const initialState = {
        user: null,
        token: "YEET",
    }

    const [store, dispatch] = useReducer(stateReducer, initialState)
    const { user, token } = store

    return (
        <StateContext.Provider value={{store, dispatch}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        { 
                            user && user.name == "manager" ? <Redirect to="/upload" />
                            : user && user.name == "floater" ? <Redirect to="/floater" />
                            : <LoginView />
                        }
                    </Route>
                    <Route path="/floater">
                        <FloaterView />
                    </Route>
                    <PrivateRoute path="/upload">
                        <ManagerUploadView />
                    </PrivateRoute>
                    <Route path="/view">
                        <ManagerViewView />
                    </Route>
                    <Route path="/stats">
                        <ManagerStatsView />
                    </Route>
                </Switch>
            </BrowserRouter>
        </StateContext.Provider>
    )
}

