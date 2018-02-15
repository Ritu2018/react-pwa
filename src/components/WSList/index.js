import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import TopBar from '../TopBar/index';

import animate from '../../functions/de_dust2';

import bgImg from '../../assets/back.jpg';
import dummy from '../../assets/dummy.jpg';
import List from '../../assets/workshops.json';
import './style.css';

class WSList extends Component {
    constructor() {
        super();
        this.curr_workshop = null;
        this.state = ({
            showList:false,
            loaded:false,
            started:false
        });
        this.imgs = [];
        this.urls = [];
    }
    showDetails(e) {
        this.curr_workshop = e;
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
            if(this.urls[url]!='')
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
        if(this.state.started)
            return; 
        this.animation = animate();
        this.setState({started:true});
    }
    componentWillUnmount() {
        clearInterval(this.animation);
    }
    render() {
        if(this.state.showList){
            // eslint-disable-next-line
            return <Redirect push to={"/workshops/"+this.curr_workshop}/>;
        }
        let list = [];
        let workshops = List?List:[];
        if(workshops.length<=0)
            return <Redirect to="/"/>;
        if(this.imgs.length<1)
            for(let ws in workshops) {
                this.imgs[ws] = dummy; }
        for(let workshop in workshops) {
            this.urls[workshop] = workshops[workshop]['poster']?workshops[workshop]['poster']:'';
            list.push(
                <div key={workshop} className="workshop" onClick={() => this.showDetails(workshop)}>
                    <div className="workshop_logo">
                        <img src={this.imgs[workshop]} alt="workshop logo"/>
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
                <div className="workshoplist_heading">
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