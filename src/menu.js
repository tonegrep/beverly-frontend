import React from 'react';
import ReactDOM from 'react-dom';
import {PlayPauseButton, StopButton} from './button'
import './index.css';

class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
            </div>
        )
    }
}

export class FriendsDropdownMenu extends Menu {
    render() {
        return(
            <div>
            </div>
        )
    }
}

export class FriendsCurrentMenu extends Menu {
    render() {
        return(
            <div>
            </div>
        )
    }
}


export class ButtonMenu extends Menu {
    render() {
        return(
            <div className="buttonmenu">
                <PlayPauseButton/>
                <StopButton/>
            </div>
        )
    }
}
