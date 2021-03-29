import React, { Component } from 'react';
import Category from './Category';
import './Main.css'

class MainTop extends Component {
    render() {
        return (
            <div className="mainTop">
                <Category id={0}>전체보기</Category>
                <Category id={1}>테크가전</Category>
                <Category id={2}>패션잡화</Category>
                <Category id={3}>뷰티</Category>
                <Category id={4}>푸드</Category>
                <Category id={5}>홈리빙</Category>
                <Category id={6}>디자인소품</Category>
                <Category id={7}>여행레저</Category>
                <Category id={8}>스포츠</Category>
                <Category id={9}>반려동물</Category>
            </div>
        )
    }
}

export default MainTop;