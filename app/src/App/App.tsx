import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from '../Homepage/index';
import './App.css';
import './Overrides.css';

export const App: React.FC = () => {
    // TODO: white flicker on page reload... cause dev server?
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Homepage }></Route>
            </Switch>
        </Router>
    )
}