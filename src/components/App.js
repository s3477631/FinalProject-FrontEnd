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
        <>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={LoginView} />
                    <Route exact path="/view" component={ManagerViewView} />
                    <Route exact path="/upload" component={ManagerUploadView} />
                    <Route exact path="/stats" component={ManagerStatsView} />
                    <Route exact path="/floater" component={FloaterView} />
                </div>
            </BrowserRouter>
        </>
    )
}

