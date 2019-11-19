
import React from 'react';
import ReactDOM from 'react-dom';
import './clock.css';

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {

        const sqSize = this.props.sqSize
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2
        const viewBox = `0 0 ${sqSize} ${sqSize}`
        const dashArray = radius * Math.PI * 2
        const dashOffset = dashArray - dashArray * this.props.percentage / 100
        return(
        
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
                {this.props.currentMinute}
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
                {this.props.currentSecond}
            </text>

        </svg>
        )
    }
}

Clock.defaultProps = {
    sqSize: 200,
    percentage: 25,
    strokeWidth: 10,
    currentMinute : 15,
    currentSecond : 43
  };

export default Clock