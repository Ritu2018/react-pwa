import React ,{ Component } from "react";
import axios from 'axios';

import TopBar from '../TopBar/index';

import List from '../../assets/events.json';
import PosterImage from '../../assets/dummy.jpg';
// import bgImg from '../../assets/back.jpg';

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
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    componentDidMount() {
        // TODO move events.json to public and retrieve here
        // Override service worker to respond to /events with saved json
        // Request image and setstate on completion
        let that = this;
        const url = List[this.dept]['events'][this.eventid]['poster']?List[this.dept]['events'][this.eventid]['poster']:"";
		if(url == "")
			return;
        axios.get(url)
        //'/posters/'+this.dept+'/'+this.eventid
        .then(function(response){
            // eslint-disable-next-line
            if(response.status == 200)
                that.setState({poster:response.data});
            else
                console.log("Error",response.status);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    onImgLoad({target:img}) {
        this.scrollEvent(img.offsetHeight,this.divElement.clientHeight);
    }
    render() {
        let details = List[this.dept]['events'][this.eventid];
        const poster = 
            <img id="poster" onLoad={this.onImgLoad} style={{top:this.state.posterTop}} src={this.state.poster} alt=""/>;
        const people = [];
        for(let organizer in details.organizers) {
            people.push(
                <span key={people}>{details.organizers[organizer]["name"]}:<a href={"tel:"+details.organizers[organizer]["phone"]}>{details.organizers[organizer]["phone"]}</a></span>
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
                    <div className="description">
                        {details.descr}
                        {rules.length>0?<span>Rules:</span>:""}
                        {rules.length>0?<ul>{rules}</ul>:""}
                    </div>
                </div>
            </div>
        return(
            <div className="eventdetails-container">
                <TopBar/>
                {/* Temporary */}
                {/* <div style={{
                    position:'absolute',
                    height:'100vh',
                    width:'100vw',
                    'z-index':'-123',
                    'background-color':'#222222'
                    }}/> */}
                <div className="poster">
                    {poster}
                </div>
                {content}                
            </div>
        );
    }


    scrollEvent(img_height,content_height) {
        window.requestAnimationFrame = window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function(f){setTimeout(f, 1000/60)};

        img_height = img_height * 1.25;
        // var img_height = document.getElementById('poster').height;


        var that = this;

        function parallaxbubbles(){
            var scrolltop = window.pageYOffset;
            var scrollable_height = img_height - document.body.clientHeight;
            if(scrollable_height < 0)
                scrollable_height = -scrollable_height;
            var slice = scrollable_height/content_height;
        
            // console.log(img_height + "  " + scrollable_height+ "  " + slice);
            let newTop = -scrolltop * slice;
            that.setState({posterTop:newTop});
            // console.log(newTop);
        }
        
        window.addEventListener('scroll', function(){ // on page scroll
            requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
        }, false);
    }
}
export default EventDetails;
