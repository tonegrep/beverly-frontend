import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import {FriendsDropdownButton, PlayPauseButton, StopButton, BackButton} from "./button"
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
    }
}

class Box extends React.Component {
    render() {
        return (
            <div className="box">
                <FriendsDropdownButton/>
                <FriendsDropdownMenu/>
                <Clock/>
                <ButtonMenu/>
                <ProgressBar/>
                <FriendsCurrentMenu/>
                <BackButton/>
            </div>
        )
    }

}

ReactDOM.render(
    <Box/>,
    document.getElementById('root'),
);
