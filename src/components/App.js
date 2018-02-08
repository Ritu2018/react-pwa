import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import HomePage from './HomePage/index';
import DeptList from './DeptList/index';
import EventList from './EventList/index';
import EventDetails from './EventDetails/index';

class App extends Component {
    render() {
        return(
            <Router history="">
                <Switch>
                    <Route path="/events/:dept/:eventid" exact component={EventDetails}/>
                    <Route path="/events/:dept" exact component={EventList}/>
                    <Route path="/events" exact component={DeptList}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;