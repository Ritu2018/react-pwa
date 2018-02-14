import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import HomePage from './HomePage/index';
import DeptList from './DeptList/index';
import EventList from './EventList/index';
import EventDetails from './EventDetails/index';
import WSList from './WSList/index';
import WSDetails from './WSDetails/index';
import Registration from './Registration/index';
import About from './About/index';

class App extends Component {
    render() {
        return(
            <Router history="">
                <Switch>
                    <Route path="/events/:dept/:eventid" component={EventDetails}/>
                    <Route path="/events/:dept" exact component={EventList}/>
                    <Route path="/events" exact component={DeptList}/>
                    <Route path="/workshops" exact component={WSList}/>
                    <Route path="/workshops/:id" component={WSDetails}/>
                    <Route path="/registration/:id" component={Registration}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/" render={()=><Redirect to="/"/>}/>
                </Switch>
            </Router>
        );
    }
}

export default App;