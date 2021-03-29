import React, { Component } from 'react';
import './header.css'
import Menu from './Menu'


class BottomHeader extends Component {
  render() {
    return (
      <div className="bottomHeader">
        <Menu>펀딩 홈</Menu>
        <Menu>카테고리</Menu>
        <Menu>
          오픈예정
          <div className="reddot"></div>
        </Menu>
        <Menu>글로벌</Menu>
      </div>
    )
  }
}

export default BottomHeader;