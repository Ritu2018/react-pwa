import React ,{ Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import TopBar from '../TopBar/index';

import List from '../../assets/events.json';
import PosterImage from '../../assets/dummy.jpg';

import './style.css';

class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            posterTop:0,
            poster:PosterImage
        };
        this.dept = props.match.params.dept;
        this.eventid = props.match.params.eventid;
        this.register = this.register.bind(this);
    }
    register(){
        if(List[this.dept]['events'][this.eventid].reglink)
            window.open(List[this.dept]['events'][this.eventid].reglink,'_blank')
    }
    componentDidMount() {
        let that = this;
        const url = (List[this.dept]&&List[this.dept]['events'][this.eventid])?List[this.dept]['events'][this.eventid]['poster']:"";
		if(url == "")
			return;
        axios.get(url, { responseType: 'arraybuffer' })
        .then(function(response){
            if(response.status == 200)
                that.setState(
                    {poster:"data:image/jpeg;base64,"+Buffer.from(response.data, 'binary').toString('base64')}
                );
            else
                console.log("Error",response.status);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    render() {
        if(!List[this.dept])
            return <Redirect to={"/events"}/>;
        if(!List[this.dept]['events'][this.eventid])
            return <Redirect to={"/events/"+this.dept}/>;
        let details = List[this.dept]['events'][this.eventid];
        const poster = 
            <img id="poster" src={this.state.poster} alt=""/>;
        const people = [];
        for(let organizer in details.organizers) {
            people.push(
                <div  key={people} className="organizer">
                    <span>{details.organizers[organizer]["name"]}:</span>
                    <span ><a href={"tel:"+details.organizers[organizer]["phone"]}>+91-{details.organizers[organizer]["phone"]}</a></span>
                </div>
            );
            
        }
        const rules = [];
        for(let rule in details.rules){
            rules.push(
                <li key={rule}>{details.rules[rule]}</li>
            );
        }
        const content =
            <div className="desc" ref={ (divElement) => this.divElement = divElement}>
                <div className="detail">
                    <div className="title">{details.name}</div>
                    <div className="top_bar">
                        <div className="contact">
                            <div className="phone">
                                <i className="fas fa-phone fa-2x fa-flip-horizontal"></i>
                            </div>
                            <div className="people">
                                {people}
                            </div>
                        </div>
                        <div className="prize">
                            <div className="info">
                                <i className="fas fa-info-circle fa-2x"></i>
                            </div>
                            <div className="info_desc">
                                <span>{details.prize?details.prize:""}</span>
                                <span>{details.date?details.date:""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="reg-button">
                        {details.reglink?<button onClick={this.register}>Register</button>:null}
                    </div>
                    <div className="description">
                    <div dangerouslySetInnerHTML={{__html:details.descr}}/>
                        {rules.length>0?<ul>{rules}</ul>:""}
                    </div>
                </div>
            </div>
        return(
            <div className="eventdetails-container">
                <TopBar/>
                {/* <i className="fas fa-arrow-left back-button"
                  onClick={()=>window.history.back()}></i> */}
                <div className="poster">
                    {poster}
                </div>
                {content}                
            </div>
        );
    }
}
export default EventDetails;
