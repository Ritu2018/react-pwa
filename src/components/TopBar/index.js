import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import topLogo from '../../assets/rituwhite.png';
import './style.css'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = ({goHome:false});
    }
    render() {
        if(this.state.goHome)
            return <Redirect push to="/"/>;
        return (
            <div>
                <i className="fas fa-arrow-left back-button"
                  onClick={()=>window.history.back()}></i>
                <img src={topLogo} className="topbar-logo" onClick={()=>this.setState({goHome:true})} alt=""/>
            </div>
        )
    }
}

export default TopBar;