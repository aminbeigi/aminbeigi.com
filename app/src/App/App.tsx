import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from '../Homepage/index';
import './App.css';
import './Overrides.css'

export const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Homepage }></Route>
            </Switch>
        </Router>
    )
}