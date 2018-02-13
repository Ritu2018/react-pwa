import React ,{ Component } from "react";
import {Redirect} from 'react-router-dom';

import TopBar from '../TopBar/index';

import animate from '../../functions/de_dust2';

import bgImg from '../../assets/back.jpg';
import List from '../../assets/events.json';
import './style.css';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.dept = props.match.params.dept;
        this.curr_event = null;
        this.state = ({
            showList:false
        });
    }
    showDetails(e) {
        this.curr_event = e;
        this.setState({showList:true});
    }
    componentDidMount() {
        // animate();
    }
    render() {
        if(!List[this.dept])
            return <Redirect to={"/events"}/>;
        if(this.state.showList){
            return <Redirect push to={"/events/"+this.dept+"/"+this.curr_event}/>;
        }
        const DeptName =
            <div className="eventlist_depname">
                {List[this.dept]['name']}
            </div>
        let list = [];
        let dept_events = List[this.dept]?List[this.dept]['events']:[];
        if(dept_events.length<=0)
            return <Redirect to="/events/"/>
        for(let event in dept_events) {
            list.push(
                <div key={event} className="event" onClick={() => this.showDetails(event)}>
                    <div className="event_logo">
                        <img src={bgImg} alt="event logo"/>
                    </div>
                    <div className="event_name">
                        {dept_events[event]["name"]}
                    </div>                    
                </div>
            )
        }

        return (
            <div className="eventlist-container">
                <canvas id="canvas" className="canvas"/>
                <TopBar/>
                {DeptName}
                <img src={bgImg} className="bgimg" alt=""/>
                <div className="event_list">
                    {list}
                </div>
            </div>
        );
    }
}

export default EventList;