import React ,{ Component } from "react";
import {Redirect} from "react-router-dom";

import './style.css';
import './pc.css';
import Logo from '../../assets/hadeeb.png';
import RITLogo from '../../assets/ritlogo.png';
import bg from '../../assets/back.jpg';

class HomePage extends Component {
    constructor(){
        super();
        this.state = ({
            showMenu:false,
            redirect:false
        });
        this.nextPage = null;
    }
    navigateTo(page) {
        this.nextPage = page;
        this.setState({redirect:true});
    }
    render() {
        if(this.state.redirect && this.nextPage!=null)
            return <Redirect push to={this.nextPage}/>;
        let menu_style = this.state.showMenu?"menu show":"menu";
        let ham_style = this.state.showMenu?"fas fa-times fa-stack-1x fa-inverse":"fas fa-bars fa-stack-1x fa-inverse";
        let menu_overlay_style = this.state.showMenu?"menu-overlay blurred":"menu-overlay";
        const menu =
            <div className={menu_style}>
                <div className="menu-btn yellow" onClick={()=>this.navigateTo("events")}><span className="menu-text">Events</span></div>
                <div className="menu-btn red"><span className="menu-text">Workshops</span></div>
                <div className="menu-btn blue"><span className="menu-text">Highlights</span></div>
                <div className="menu-btn green"><span className="menu-text">Contact</span></div>
            </div>;
        const sidemenu = 
            <div className="second_menu">
                <div className="social_icons">
                </div>
                <div className="extra_icons">
                </div>
            </div>;
        return(
        <div className="container">
            <img className="bg" src={bg} alt=""/>
            <div className="bg-overlay"/>
            <div className={menu_overlay_style}/>
            <div className="logo-container">
                <img className="logo" src={Logo} alt=""/>
            </div>
            <div className="ham-btn" onClick={()=>this.setState({showMenu:!this.state.showMenu})}>
                <span class="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class={ham_style}></i>
                </span>
            </div>
            {menu}
            <img className="rit-logo" src={RITLogo} alt=""/>
        </div>
        );
    }
}

export default HomePage;