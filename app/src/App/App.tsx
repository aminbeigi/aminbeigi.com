import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from '../HomePage/index';
import './App.css';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Homepage }></Route>
            </Switch>
        </Router>
    )
}