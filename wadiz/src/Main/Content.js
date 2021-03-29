import React, { Component } from 'react'
import './Main.css'

class Content extends Component {
    render() {
        console.log(this.props.data.url)
        return (
            <div className="content">
                <img className="contentImg" src={this.props.data.url} alt=""></img>
                <div className="contentTitle">{this.props.data.title.slice(0, 20)}</div>
                <div className="contentWriter">{this.props.data.writer}</div>
                <progress className="contentProgressBar" value={this.props.data.progress} max="100"></progress>
                <div className="contentProgress">
                    <div className="contentProgressPercent">{this.props.data.progress}%</div>
                    <div className="contentProgressPrice">·{this.props.data.price}원</div>
                    <div className="contentProgressDday">{this.props.data.dDay}일 전</div>
                </div>
            </div>
        )
    }
}

export default Content;