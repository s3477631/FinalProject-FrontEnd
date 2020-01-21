import React, { useState } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FloaterView from "./FloaterView"
import LoginView from "./LoginView"
import ManagerUploadView from "./ManagerUploadView"
import ManagerStatsView from "./ManagerStatsView"
import ManagerViewView from "./ManagerViewView"
let user = {
    name: "manager"
}

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <LoginView />
                </Route>
                <Route path="/floater">
                    <FloaterView />
                </Route>
                <Route path="/upload">
                    <ManagerUploadView />
                </Route>
                <Route path="/view">
                    <ManagerViewView />
                </Route>
                <Route path="/stats">
                    <ManagerStatsView />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

