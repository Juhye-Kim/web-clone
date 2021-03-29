import React, { Component } from 'react'
import MainTop from './MainTop';
import MainBottom from './MainBottom';
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <MainTop></MainTop>
        <MainBottom></MainBottom>
      </div>
    )
  }
}

export default Main;