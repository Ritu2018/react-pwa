import React ,{ Component } from "react";
import axios from 'axios';
import './style.css';
import TopBar from "../TopBar/index";
import bgImg from '../../assets/back.jpg';

class About extends Component {
    render() {
        return(
            <div className="about-container">
                <img src={bgImg} className="bgimg" alt=""/>
                <TopBar/>
                <img/>
                <img/>
                <div className="title-content">
                    <div className="ritu-title">RITU</div>
                    <div className="ritu-desc">
RITU has been conceived to unveil the true grit and shine of our institute, a platform to test and enhance the student community’s fineness. With an estimated budget of over 25 lakhs, it’ll be nothing short of grandeur with the pinnacle of technical stateliness and a robust exemplar of top-class management. The tech-fest will amalgamate the five B.Tech Departments, the B.Arch. Department and the PG Departments for a fine exertion towards RITU’s triumph. With the expertise and dexterity gained from the numerous National-level tech-fests hosted and competed by the students of the institute, it’s unreasonable to doubt their resolve in hosting RITU.
                    </div>
                </div>
                <div className="team">
                    <div className="dev-title" >Developers</div>
                    <div className="card-list">
                        <div className="card">
                            <a href="https://github.com/hadeeb" target="_blank">
                            <img src="https://avatars3.githubusercontent.com/u/16823042" alt=""/>
                            <div className="team-profile" >
                                <h4><b>
                                    Hadeeb Farhan
                                </b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/bineeth923" target="_blank">
                            <img src={"https://avatars0.githubusercontent.com/u/13812260"}/>
                            <div className="team-profile" >
                                <h4><b>Bineeth</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                        <a href="https://github.com/paradoxzero" target="_blank">
                            <img src={"https://avatars2.githubusercontent.com/u/14165258"}/>
                            <div className="team-profile" >
                                <h4><b>Sidhin S Thomas</b></h4> 
                                <p></p>
                            </div>
                        </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/abhiram-r" target="_blank">
                            <img src={"https://avatars0.githubusercontent.com/u/19486977"}/>
                            <div className="team-profile" >
                                <h4><b>Abhiram</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/jelit" target="_blank">
                            <img src={"https://avatars0.githubusercontent.com/u/20624742"}/>
                            <div className="team-profile" >
                                <h4><b>Jelit</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/abhi1401" target="_blank">
                            <img src={"https://avatars3.githubusercontent.com/u/15173043"}/>
                            <div className="team-profile" >
                                <h4><b>Abhishek</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/akhilmhdh" target="_blank">
                            <img src={"https://avatars1.githubusercontent.com/u/31166322"}/>
                            <div className="team-profile" >
                                <h4><b>Akhil</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;