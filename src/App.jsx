import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Main from "./Main";
import Result from "./Result"
export default function App() {

    return (
        <Router>
            <Switch>
                
                <Route exact path="/result">
                    <Result />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
                <Route path="/404">
                    <h1>Error</h1>
                </Route>
                <Redirect to="/404"/>
            </Switch>
            
        </Router>

    )
}