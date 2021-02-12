import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from '../HomePage/index';
import './App.css';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Homepage }></Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);