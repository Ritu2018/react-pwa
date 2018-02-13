import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import TopBar from '../TopBar/index';

import animate from '../../functions/de_dust2';

import bgImg from '../../assets/back.jpg';
import List from '../../assets/workshops.json';
import './style.css';

class WSList extends Component {
    constructor() {
        super();
        this.curr_workshop = null;
        this.state = ({
            showList:false
        });
    }
    showDetails(e) {
        this.curr_workshop = e;
        this.setState({showList:true});
    }
    componentDidMount() {
        // animate();
    }
    render() {
        if(this.state.showList){
            // eslint-disable-next-line
            return <Redirect push to={"/workshops/"+this.curr_workshop}/>;
        }
        let list = [];
        let workshops = List?List:[];
        if(workshops.length<=0)
            return <Redirect to="/"/>
        for(let workshop in workshops) {
            list.push(
                <div key={workshop} className="workshop" onClick={() => this.showDetails(workshop)}>
                    <div className="workshop_logo">
                        <img src={bgImg} alt="workshop logo"/>
                    </div>
                    <div className="workshop_name">
                        {workshops[workshop]["name"]}
                    </div>                    
                </div>
            )
        }
        return (
            <div className="workshoplist-container">
                <canvas id="canvas" className="canvas"/>
                <TopBar/>
                <div className="eventlist_depname">
                    Workshops
                </div>
                <img src={bgImg} className="bgimg" alt=""/>
                <div className="workshop_list">
                    {list}
                </div>
            </div>
        );
    }
}

export default WSList;