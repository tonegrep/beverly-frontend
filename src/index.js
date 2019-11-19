import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            color: getRandomColor()
        }
        this.updateName = this.updateName.bind(this)
    }
    
    updateName(event) {
        this.setState({
            name : event.target.value,
            color: getRandomColor() 
        })
    }

    render() {
        return (
            <div className="box">
                <h1 style={{color: this.state.color}}>{this.state.name}</h1>
                <input type="text" name="nameBox" onChange={this.updateName}/>
            </div>
        )
    }
}

ReactDOM.render(
    <React.Fragment>
        <Box/>
        <Box/>
    </React.Fragment>,
    document.getElementById('root')
);