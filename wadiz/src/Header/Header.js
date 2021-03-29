import React, { Component } from 'react';
import TopHeader from './topHeader';
import BottomHeader from './bottomHeader';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <TopHeader />
        <BottomHeader />
      </div>
    )
  }
}

export default Header;