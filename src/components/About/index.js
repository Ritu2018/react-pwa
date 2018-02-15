import React ,{ Component } from "react";
import './style.css';
import TopBar from "../TopBar/index";
import bgImg from '../../assets/back.jpg';
import animate from '../../functions/de_dust2';

class About extends Component {
    constructor(){
        super();
        this.state = ({
            started:false
        });
    }
    componentDidMount(){
        if(this.state.started)
            return;
        this.animation = animate();
        this.setState({started:true});
    }
    componentWillUnmount() {
        clearInterval(this.animation);
    }
    render() {
        return(
            <div className="about-container">
                <canvas id="canvas" className="canvas"/>
                <img src={bgImg} className="bgimg" alt=""/>
                <TopBar/>
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
                            <a href="https://github.com/hadeeb" target="_blank" rel="noopener noreferrer">
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
                            <a href="https://github.com/bineeth923" target="_blank"rel="noopener noreferrer">
                            <img src={"https://avatars0.githubusercontent.com/u/13812260"} alt=""/>
                            <div className="team-profile" >
                                <h4><b>Bineeth</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                        <a href="https://github.com/paradoxzero" target="_blank" rel="noopener noreferrer">
                            <img src={"https://avatars2.githubusercontent.com/u/14165258"} alt=""/>
                            <div className="team-profile" >
                                <h4><b>Sidhin S Thomas</b></h4> 
                                <p></p>
                            </div>
                        </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/abhiram-r" target="_blank" rel="noopener noreferrer">
                            <img src={"https://avatars0.githubusercontent.com/u/19486977"} alt=""/>
                            <div className="team-profile" >
                                <h4><b>Abhiram</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/jelitkr" target="_blank" rel="noopener noreferrer">
                            <img src={"https://avatars0.githubusercontent.com/u/36465496"} alt=""/>
                            <div className="team-profile" >
                                <h4><b>Jelit</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/abhi1401" target="_blank" rel="noopener noreferrer">
                            <img src={"https://avatars3.githubusercontent.com/u/15173043"} alt=""/>
                            <div className="team-profile" >
                                <h4><b>Abhishek</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/gintu" target="_blank" rel="noopener noreferrer">
                            <img src={"https://avatars2.githubusercontent.com/u/13748550"} alt=""/>
                            <div className="team-profile" >
                                <h4><b>Gintu Tom</b></h4> 
                                <p></p>
                            </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/akhilmhdh" target="_blank" rel="noopener noreferrer">
                            <img src={"https://avatars1.githubusercontent.com/u/31166322"} alt=""/>
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