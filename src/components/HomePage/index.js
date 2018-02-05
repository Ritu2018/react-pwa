import React ,{ Component } from "react";

import './style.css';
import initdraw from './splat';
import Logo from '../../assets/ritu.svg';
import SideButton from '../../assets/asset1.svg';

class HomePage extends Component {

    componentDidMount() {
        initdraw();
    }

    showSideMenu() {
        document.getElementsByClassName("sidemenu_about")[0].style.left = 0;
        document.getElementsByClassName("sidemenu_social")[0].style.top = 0;
        document.getElementsByClassName("overlay")[0].style.opacity = 1;
        document.getElementsByClassName("overlay")[0].style.zIndex = 5;

        document.getElementsByClassName("sidemenu_icon")[0].style.opacity = 0;
    }
    hideSideMenu(){
        document.getElementsByClassName("sidemenu_about")[0].style.left = -100 + '%';
        document.getElementsByClassName("sidemenu_social")[0].style.top = -100 + '%';
        document.getElementsByClassName("overlay")[0].style.opacity = 0 ;
        document.getElementsByClassName("overlay")[0].style.zIndex = 0;
        document.getElementsByClassName("sidemenu_icon")[0].style.opacity = 1;
    }

    render() {
        const circlebtn = 
            <div className="circle-menubar-button">
                <span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x" style={{color:'red'}}/>
                    <i id="btn-text" className="fa-inverse fas fa-bars fa-stack-1x" data-fa-transform="shrink-6"/>
                </span>
            </div>;
        const mainmenu = 
            <div className="main-container">
                <div className="element-container-pc">
                    <div className="main-element-pc">
                        <i  className="main-element-icon"></i>
                        <label className="main-element-title-pc">Events</label>
                    </div>
                    <div className="main-element-pc" >
                        <i  className="main-element-icon"></i>
                        <label className="main-element-title-pc">Workshops</label>
                    </div>
                    <div className="main-element-pc">
                        <i  className="main-element-icon"></i>
                        <label className="main-element-title-pc">Highlights</label>
                    </div>
                    <div className="main-element-pc">
                        <i  className="main-element-icon"></i>
                        <label className="main-element-title-pc">Registration</label>
                    </div>
                </div>
            </div>;

        const sideicon = 
            <div className="sidemenu_icon" id="sidemenu_fab" onClick={this.showSideMenu}>
                <img src={SideButton} alt="" className="side-menu"/>
            </div>;
        const sidesocial = 
            <div className="sidemenu_social">
                <span><i className="fab fa-facebook"></i></span>
                <span><i className="fab fa-instagram"></i></span>
                <span><i className="fab fa-instagram"></i></span>
            </div>;

        const sideabout = 
            <div className="sidemenu_about"/>;

        const content = 
            <div className="content">
                <div className="test">
                    <div className="img">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="date">
                        <span>Feb 28</span>
                        <span>Mar 1,2</span>
                    </div>

                </div>

                <div className="desc">
                    <div className="footer">

                    </div>
                    <div className="container">
                        <span className="typed">
                                Techno Cultural Fest of RIT
                        </span>
                    </div>
                </div>
            </div>;
        const canvas = <canvas id="canvas"></canvas>;
        const overlay = <div className="overlay" onClick={this.hideSideMenu}></div>;
        return(
        <div>
            {circlebtn}
            {mainmenu}
            {sideicon}
            {sideabout}
            {sidesocial}
            {canvas}
            {overlay}
            {content}
        </div>
        );
    }
}

export default HomePage;