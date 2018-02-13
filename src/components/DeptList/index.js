import React ,{ Component } from "react";
import { Redirect } from 'react-router-dom';

import TopBar from '../TopBar/index';

import animate from '../../functions/de_dust2';

import List from '../../assets/events.json';
import bgImg from '../../assets/back.jpg';
import './style.css';
import './pc.css';

class DeptList extends Component {
    constructor() {
        super();
        this.depts = [];
        for(let dept in List) {
            this.depts.push(
                [dept,List[dept]['name']]
            );
        }
        this.state = (
            {
                left:0,
                redirect:false,
                curr_dept:0
            }
        );
     }
    
    componentDidMount() {
        let that = this;
        document.addEventListener('keydown', function(event){
            if(event.key === 'ArrowLeft'||event.key === 'ArrowUp')
                that.slide(-1);
            else if(event.key === 'ArrowRight'||event.key === 'ArrowDown')
                that.slide(1);
        });
        // animate();
    }

    slide(count) {
        // console.log(count);
        let l = this.depts.length;
        let newdept = (l+this.state.curr_dept+count)%l;
        // console.log(newdept);
        this.setState({curr_dept:newdept});
        // console.log((l+count)%l);
     }

    handleStart(clientX) {
        this.setState({
          velocity: 0,
          timeOfLastDragEvent: Date.now(),
          touchStartX: clientX,
          beingTouched: true
        });
      }
      
    handleMove(clientX) {
        if (this.state.beingTouched) {
            const touchX = clientX;
            const currTime = Date.now();
            const elapsed = currTime - this.state.timeOfLastDragEvent;
            const velocity = 20 * (touchX - this.state.prevTouchX) / elapsed;
            let deltaX = touchX - this.state.touchStartX;
            this.setState({
                left: deltaX,
                velocity:velocity,
                timeOfLastDragEvent: currTime,
                prevTouchX: touchX
            });
        }
     }
    
    handleEnd() {
        const currTime = Date.now();
        const elapsed = currTime - this.state.timeOfLastDragEvent;
        if(elapsed<250 && Math.abs(this.state.velocity)>1) {
            if(this.state.left>100)
                this.slide(-1);
            else if(this.state.left<-100)
                this.slide(1);
            this.setState({
                velocity: this.state.velocity,
                touchStartX: 0,
                beingTouched: false
            });
        }
     }
    
    handleTouchStart(touchStartEvent) {
        // touchStartEvent.preventDefault();
        this.handleStart(touchStartEvent.targetTouches[0].clientX);
     }
    
    handleTouchMove(touchMoveEvent) {
        this.handleMove(touchMoveEvent.targetTouches[0].clientX);
     }
    
    handleTouchEnd() {
        this.handleEnd();
     }
    
    handleMouseDown(mouseDownEvent) {
        mouseDownEvent.preventDefault();
        this.handleStart(mouseDownEvent.clientX);
     }
    
    handleMouseMove(mouseMoveEvent) {
        this.handleMove(mouseMoveEvent.clientX);
     }
    
    handleMouseUp() {
       this.handleEnd();
     }
    
    handleMouseLeave() {
       this.handleMouseUp();
     }

    render() {
        if(this.state.redirect){
            return <Redirect push to={"/events/"+this.depts[this.state.curr_dept][0]}/>;
        }
        const leftbutton = 
            <i className="fas fa-caret-left left-arrow" onClick={()=>this.slide(-1)}></i>;
        const rightbutton = 
            <i className="fas fa-caret-right right-arrow" onClick={()=>this.slide(1)}></i>;
        let l =this.depts.length;
        const icons = 
            <div className="icon-container">
                <div className="side-icon" onClick={()=>this.slide(-1)}>
                    <div className="circle">
                        <img className="bot-icon" alt=""
                         src={process.env.PUBLIC_URL + '/static/depicons/'+this.depts[(this.state.curr_dept-1+l)%l][0]+'.png'}/>
                    </div>
                </div>
                <div className="main-icon" onClick={()=>this.setState({redirect:true})}>
                    <div className="circle">
                        <img className="bot-icon" alt=""
                         src={process.env.PUBLIC_URL + '/static/depicons/'+this.depts[this.state.curr_dept][0]+'.png'}/>
                    </div>
                </div>
                <div className="side-icon" onClick={()=>this.slide(1)}>
                    <div className="circle">
                        <img className="bot-icon" alt=""
                         src={process.env.PUBLIC_URL + '/static/depicons/'+this.depts[(this.state.curr_dept+1+l)%l][0]+'.png'}/>
                    </div>
                </div>
            </div>;
        const pagination = [];
        for(let dept in this.depts) {
            // eslint-disable-next-line
            let style = (dept==this.state.curr_dept)?"pagination-icon active":"pagination-icon";
            pagination.push(
                <div className={style} key={dept} onClick={()=>this.slide(dept-this.state.curr_dept)}>
                    <div className="circle">
                        <img className="bot-icon" src={process.env.PUBLIC_URL + '/static/depicons/'+this.depts[dept][0]+'.png'} alt=""/>
                    </div>
                    <span className="dep_name">{this.depts[dept][1]}</span>
                </div>
            );
         }
        return(
            <div className="deptlist-container"
                onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
                onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
                onTouchEnd={() => this.handleTouchEnd()}
                onMouseDown={mouseDownEvent => this.handleMouseDown(mouseDownEvent)}
                onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent)}
                onMouseUp={() => this.handleMouseUp()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <canvas id="canvas" className="canvas"/>
                <TopBar/>
                {leftbutton}
                {rightbutton}
                <img src={bgImg} className="bgimg" alt=""/>
                {icons}
                <div className="dep_name-container">
                    <span className="dep_name" onClick={()=>this.setState({redirect:true})}>
                        {this.depts[this.state.curr_dept][1]}
                    </span>
                </div>
                <div className="pagination">
                    {pagination}
                    
                </div>
            </div>
         );
     }
}

export default DeptList;
