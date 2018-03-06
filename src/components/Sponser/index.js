import React ,{ Component } from "react";
import './style.css';
import TopBar from "../TopBar/index";
import bgImg from '../../assets/back.jpg';
import animate from '../../functions/de_dust2';

class Sponser extends Component {
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
            <div className="sponsor-container">
                <canvas id="canvas" className="canvas"/>
                <img src={bgImg} className="bgimg" alt=""/>
                <TopBar/>
                <div className="sponsor-title">
                    <h1>Sponsors</h1>
                </div>
                <div className="card-list">
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/sbi.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                State Bank of India
                            </b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/tcs.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                Tata Consultancy Serivces
                            </b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/vella.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                Backwater Ripples
                            </b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/time.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                T.I.M.E Kottayam
                            </b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/ksfe.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                Kerala State Financial Enterprises
                            </b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/km.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                KM Technologies
                            </b></h4>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3.us-east-2.amazonaws.com/ritu-static-files/sponsor/avalon.jpg" alt=""/>
                        <div className="team-profile" >
                            <h4><b>
                                Avalon Systems and Services
                            </b></h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sponser;