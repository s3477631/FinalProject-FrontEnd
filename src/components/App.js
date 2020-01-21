import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FloaterView from "./FloaterView"
import LoginView from "./LoginView"
import ManagerUploadView from "./ManagerUploadView"
import ManagerStatsView from "./ManagerStatsView"
import ManagerViewView from "./ManagerViewView"

export default function App() {
    const [location, navigateTo] = useState(null)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginView />
                </Route>
                <Route path="/floater">
                    <FloaterView />
                </Route>
                <Route path="/upload">
                    <ManagerUploadView navigateTo={navigateTo}/>
                </Route>
                <Route path="/view">
                    <ManagerViewView navigateTo={navigateTo}/>
                </Route>
                <Route path="/stats">
                    <ManagerStatsView navigateTo={navigateTo}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

