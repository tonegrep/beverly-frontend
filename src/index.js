import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import {FriendsDropdownMenu, FriendsCurrentMenu, ButtonMenu} from "./menu"
import './index.css';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


class ProgressBar extends React.Component {
    render() {
        return(
            <div>
            </div>
        )
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <div className="box">
                <FriendsDropdownMenu/>
                <Clock/>
                <ButtonMenu/>
                <ProgressBar/>
                <FriendsCurrentMenu/>
            </div>
        )
    };

}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
