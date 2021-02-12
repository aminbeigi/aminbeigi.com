import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from '../HomePage/index';
import './App.css';

export const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Homepage }></Route>
            </Switch>
        </Router>
    )
}