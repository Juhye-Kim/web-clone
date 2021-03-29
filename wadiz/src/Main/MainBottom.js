import React, { Component } from 'react'
import Content from './Content';
import fakedata from './fakedata'
import magnifyingGlass from '../Header/magnifyingGlass.svg'

class MainBottom extends Component {
    render() {
        return (
            <div className="mainBottom">
                <div className="mainBottom-title">
                    <div className="left">
                        <div className="title">
                            전체보기
                        </div>
                    </div>

                    <div className="right">
                        <img src={magnifyingGlass} alt="돋보기" />
                        <div className="all">전체</div>
                        <div className="recommend">추천순</div>
                    </div>
                </div>
                <div className="contents">
                    <Content data={fakedata[0]}></Content>
                    <Content data={fakedata[1]}></Content>
                    <Content data={fakedata[2]}></Content>
                    <Content data={fakedata[3]}></Content>
                    <Content data={fakedata[4]}></Content>
                    <Content data={fakedata[5]}></Content>
                    <Content data={fakedata[6]}></Content>
                    <Content data={fakedata[7]}></Content>
                    <Content data={fakedata[8]}></Content>
                </div>
            </div>
        )
    }
}

export default MainBottom;