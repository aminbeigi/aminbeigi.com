import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from '../Homepage/index';
import { NotFoundPage } from '../NotFoundPage/index';
import './App.css';
import './Overrides.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Homepage }></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </Router>
    )
}