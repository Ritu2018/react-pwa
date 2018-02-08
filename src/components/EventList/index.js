import React ,{ Component } from "react";
import {Redirect} from 'react-router-dom';

import dummyImage from '../../assets/dummy.png';
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
    render() {
        if(this.state.showList){
            return <Redirect push to={"/events/"+this.dept+"/"+this.curr_event}/>
        }
        let list = [];
        let dept_events = List[this.dept];
        for(let event in dept_events) {
            list.push(
                <div key={event} className="event" onClick={() => this.showDetails(event)}>
                    <div className="event_logo">
                        <img src={dummyImage} alt="event logo"/>
                    </div>
                    <div className="event_name">
                        {dept_events[event]["name"]}
                    </div>                    
                </div>
            )
        }

        return (
            <div>
                <div className="event_list">
                    {list}
                </div>
            </div>
        );
    }
}

export default EventList;