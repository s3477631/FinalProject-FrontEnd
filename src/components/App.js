import React, { useReducer, useEffect } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FloaterView from "./FloaterView"
import LoginView from "./LoginView"
import ManagerUploadView from "./ManagerUploadView"
import ManagerStatsView from "./ManagerStatsView"
import ManagerViewView from "./ManagerViewView"
import stateReducer from "./stateReducer"
import { StateContext } from "./store"
import PrivateRoute from "./PrivateRoute"
import ManagerRoute from "./ManagerRoute"

export default function App() {

    const initialState = {
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
    }

    const [store, dispatch] = useReducer(stateReducer, initialState)
    const { user } = store
    
    // Use effect hook to initialise component on mount
	useEffect(()=> {

        // get an existing user from localStorage
        dispatch({
            type: "setUser",
            data: JSON.parse(localStorage.getItem("user"))
		})
        
        // same with token
        dispatch({
            type: "setToken",
            data: localStorage.getItem("token")
        })

        // return a function that specifies any actions on component unmount
        return () => {}
        
    }, [])
    
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

