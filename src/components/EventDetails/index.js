import React ,{ Component } from "react";
import dummyImage from '../../assets/dummy.png';
import List from '../../assets/events.json';

class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.dept = props.match.params.dept;
        this.eventid = props.match.params.eventid;
    }
    render() {
        let details = List[this.dept][this.eventid];
        return(
            <div>
                <div><img src={dummyImage} alt="event poster"/></div>
                <div>{details.name}</div>
                <div>{details.descr}</div>
                <div onClick={()=>this.props.history.goBack()}>Close</div>
            </div>
        );
    }
}
export default EventDetails;