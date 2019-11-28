
import React from 'react';
import ReactDOM from 'react-dom';
import './clock.css';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active : false,
            inPomo : true,
            inBreak : false,
            currentMinute : 0,
            currentSecond : 0,
            start : Date.now(),
            pomodoroCount : 4,
            breakCount : 3,
            breakLength : this.props.breakLength,
            pomodoroLength : this.props.pomodoroLength,
            circlePercentage : 100,
        };
        this.stopTimer = this.stopTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    handleTime = setInterval(() => {
        if (this.state.active) {
            const periodLength = (this.state.inPomo) ? this.state.pomodoroLength : this.state.breakLength;
            if (this.state.currentMinute*60+this.state.currentSecond != periodLength) {
                let percentTimer = setInterval(() => {
                    if (this.state.active)
                        this.setState(state => ({
                            circlePercentage : this.state.circlePercentage - ((1/periodLength) * 100)/50,
                        }));
                }, 5);
                setTimeout(() => {clearInterval(percentTimer);}, 250);
                if (this.state.currentSecond != 59) {
                    this.setState(state => ({
                        currentSecond : this.state.currentSecond + 1,
                    }));
                } else {
                    this.setState(state => ({
                        currentSecond : 0,
                        currentMinute : this.state.currentMinute + 1,
                    }));
                }
            } else {
                if (this.state.inPomo) {
                    this.setState(state => ({
                        inBreak: true,
                        inPomo: false,
                        currentSecond : 0,
                        currentMinute : 0,
                        circlePercentage : 100,
                        pomodoroCount : this.state.pomodoroCount - 1,
                    }));
                } else if (this.state.inBreak){
                    this.setState(state => ({
                        inPomo : true,
                        inBreak : false,
                        currentSecond : 0,
                        currentMinute : 0,
                        circlePercentage : 100,
                        breakCount : this.state.breakCount - 1,
                    }));
                }
            }

        }
    }, 1000);

    stopTimer() {
        this.setState(state => ({
            active : false, 
            currentMinute : 0,
            currentSecond : 0,
            circlePercentage : 100,
        }));
    }

    resumeTimer() {
        this.setState(state => ({
            active : true,
        }));
    }

    pauseTimer() {
        this.setState(state => ({
            active : false,
        }))
    }

    render() {

        const sqSize = this.props.sqSize;
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.state.circlePercentage / 100;
        const circleColor = (this.state.inPomo) ? `lightskyblue` : `gray`;
        return(
            <div className="menu pomo-menu">
                <div>
                <svg
                    width={this.props.sqSize}
                    height={this.props.sqSize}
                    viewBox={viewBox}>
                    <circle
                        className="circle-background"
                        cx={this.props.sqSize / 2}
                        cy={this.props.sqSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`} />
                    <circle
                        className="circle-progress"
                        stroke={circleColor}
                        cx={this.props.sqSize / 2}
                        cy={this.props.sqSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`}
                        transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                        style={{
                          strokeDasharray: dashArray,
                          strokeDashoffset: dashOffset
                        }} />
                    <text
                        className="circle-text"
                        x="30%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle">
                        {this.state.currentMinute}
                    </text>
                    <text
                        className="circle-text"
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle">
                        :
                    </text>
                    <text
                        className="circle-text"
                        x="70%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle">
                        {this.state.currentSecond}
                    </text>
                    
                </svg>
                </div>
                <div className="menu pomo-buttonmenu">
                    <button className="pomo-button" onClick={this.resumeTimer}>start</button>
                    <button className="pomo-button" onClick={this.stopTimer}>stop</button>
                </div>
                <div className="pomo-progress">
                    dskjhfg;
                </div>
        </div>
        )
    };
}

Clock.defaultProps = {
    sqSize: 250,
    strokeWidth: 10,
    pomodoroLength: 5,
    breakLength: 3,
};

export default Clock