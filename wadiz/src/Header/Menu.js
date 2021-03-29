import React, { Component } from 'react';
import './header.css'

class Menu extends Component {
    render() {
        return (
            <div className="menu">{this.props.children}</div>
        )
    }
}

export default Menu;