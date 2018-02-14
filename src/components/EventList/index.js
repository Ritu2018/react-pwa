import React ,{ Component } from "react";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import TopBar from '../TopBar/index';

import animate from '../../functions/de_dust2';

import bgImg from '../../assets/back.jpg';
import dummy from '../../assets/dummy.jpg';
import List from '../../assets/events.json';
import './style.css';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.dept = props.match.params.dept;
        this.curr_event = null;
        this.state = ({
            showList:false,
            loaded:false
        });
        this.imgs = [];
        this.urls = [];
    }
    showDetails(e) {
        this.curr_event = e;
        this.setState({showList:true});
    }
    setImg(n,img){
        this.imgs[n] = img;
        this.setState({loaded:true});
    }
    componentDidMount() {
        // animate();
        let that = this;
        for(let url in this.urls){
            console.log(this.urls[url]);
            axios.get(this.urls[url],{ responseType: 'arraybuffer' })
            .then(function(response){
                if(response.status == 200){
                    const dd = "data:image/jpeg;base64,"+Buffer.from(response.data, 'binary').toString('base64');
                    that.setImg(url,dd);
                }
            })
            .catch(function(err){
                console.log(err);                
            });
        }
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
        if(this.imgs.length<1)
        for(let event in dept_events) {
            this.imgs[event] = dummy; }
        for(let event in dept_events) {          
            this.urls[event] = dept_events[event]["poster"];
            list.push(
                <div key={event} className="event" onClick={() => this.showDetails(event)}>
                    <div className="event_logo">
                        <img src={this.imgs[event]} alt="event logo"/>
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