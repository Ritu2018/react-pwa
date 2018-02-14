import React ,{ Component } from "react";
import {Redirect} from "react-router-dom";

import animate from '../../functions/de_dust2';

import './style.css';
import './pc.css';
import Logo from '../../assets/ritu.png';
import RITLogo from '../../assets/ritlogo.png';
import bg from '../../assets/back.jpg';


class HomePage extends Component {
    constructor(){
        super();
        this.state = ({
            showMenu:false,
            redirect:false,
            date: new Date()
        });
        this.nextPage = null;
    }
    navigateTo(page) {
        this.nextPage = page;
        this.setState({redirect:true});
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        // animate();
        
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }
    getTimeRemaining() {
        let endtime = new Date(Date.parse("Tue Feb 27 2018 11:59:00 GMT+0530 (India Standard Time)"));
        var t = Date.parse(endtime) - Date.parse(this.state.date);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    render() {
        if(this.state.redirect && this.nextPage!=null)
            return <Redirect push to={this.nextPage}/>;
        /* Set Timer */
        let t = this.getTimeRemaining();
        let clock = 
            <div className="clockdiv">
                <div>
                    <span className="days">{('0' + t.days).slice(-2)}</span>
                    <div className="smalltext">Days</div>
                </div>
                <div>
                    <span className="hours">{('0' + t.hours).slice(-2)}</span>
                    <div className="smalltext">Hours</div>
                </div>
                <div>
                    <span className="minutes">{('0' + t.minutes).slice(-2)}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                <div>
                    <span className="seconds">{('0' + t.seconds).slice(-2)}</span>
                    <div className="smalltext">Seconds</div>
                </div>
            </div>;
        if(t.days<1)
            clock = null;
        /* End Timer code */
        let menu_style = this.state.showMenu?"menu show":"menu";
        let ham_style = this.state.showMenu?"fas fa-times fa-stack-1x fa-inverse":"fas fa-bars fa-stack-1x fa-inverse";
        let menu_overlay_style = this.state.showMenu?"menu-overlay blurred":"menu-overlay";
        const menu =
            <div className={menu_style}>
                <div className="menu-btn yellow" onClick={()=>this.navigateTo("events")}>
                    <span className="menu-text">Events</span>
                </div>
                <div className="menu-btn red" onClick={()=>this.navigateTo("workshops")}>
                    <span className="menu-text">Workshops</span>
                </div>
                <div className="menu-btn blue">
                    <span className="menu-text">Highlights</span>
                </div>
                <div className="menu-btn green" onClick={()=>this.navigateTo("about")}>
                    <span className="menu-text">About</span>
                </div>
            </div>;
        // const sidemenu = 
        //     <div className="second_menu">
        //         <div className="social_icons">
        //         </div>
        //         <div className="extra_icons">
        //         </div>
        //     </div>;
        
        return(
        <div className="homepage-container">
            {clock}
            <canvas className="canvas" id="canvas"></canvas>
            <img className="bg" src={bg} alt=""/>
            <div className="bg-overlay"/>
            <div className={menu_overlay_style}/>
            <div className="logo-container">
                <img className="logo" src={Logo} alt=""/>
            </div>
            <div className="ham-btn" onClick={()=>this.setState({showMenu:!this.state.showMenu})}>
                <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className={ham_style}></i>
                </span>
            </div>
            {menu}
            <img className="rit-logo" src={RITLogo} alt=""/>
        </div>
        );
    }
}

export default HomePage;