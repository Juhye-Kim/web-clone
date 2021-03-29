import React, { Component } from 'react';
import './header.css';
import magnifyingGlass from './magnifyingGlass.svg'
import more from './more.svg'

class TopHeader extends Component {
    render() {
        return (
            <div className="topHeader">
                <div className="logo">wadiz</div>
                <div className="topHeader-menu">펀딩하기</div>
                <div className="topHeader-menu">투자하기</div>
                <div className="topHeader-menu">스타트업 찾기</div>
                <div className="topHeader-showmore">
                    <div className="moreInfo">
                        더보기
                    </div>
                    <img src={more} alt="더보기" />
                </div>
                <div className="topHeader-search">
                    <img src={magnifyingGlass} alt="돋보기" />
                    <input type="text"
                        placeholder="어떤 프로젝트를 찾고 계신가요?"></input>
                </div>
                <div className="topHeader-user">로그인</div>
                <div className="topHeader-user">회원가입</div>
                <div className="topHeader-project">프로젝트 오픈 신청</div>
            </div>
        )
    }
}

export default TopHeader;