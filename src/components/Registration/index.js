import React,{ Component } from 'react';

import TopBar from '../TopBar/index';

import bgImg from '../../assets/back.jpg';
import List from '../../assets/workshops.json';
import './style.css';

class Registration extends Component {
    
    constructor(props) {
        super(props);
        let eventid = props.match.params.id;
        this.fee = 0;
        for(let event in List){
            if(List[event]['code'] == eventid) {
                this.eventname = List[event]['name'];
                this.fee = List[event]['regfee'];
                this.date = List[event]['date'];
                break;
            }
        }
    }

    render() {
        // if(this.fee<=0)
        //     return <Redirect to="/"/>;
        return(
            <div class="container">
                <TopBar/>
                <img src={bgImg} className="bgimg" alt=""/>
                <div class="registration">
                    <h1>Registration</h1>
                    <div class="reg-detail">
                        <p>Event Name: <span>{this.eventname}</span></p>
                        <p>Date: <span>{this.date}</span></p>
                        <p>Registration Fee: <span>{this.fee}</span></p>
                    </div>
                    <form action="/pay" method="post" class="form-registration">
                        <input placeholder="Name" type="text" name="author"/>
                        <input placeholder="Email" type="email" name="email"/>
                        <input placeholder="Phone Number" type="tel" name="phoneNumber" maxLength="10"/>
                        <input placeholder="College Name" type="text" name="collegeName"/>
                        <input type="submit" value="Register"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;