import React, { Component } from "react";
import "./Footer.css";
import question from './question.svg'

const appleSVG = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
const andriodSVG = "https://cdn.icon-icons.com/icons2/887/PNG/512/Play_Store_icon-icons.com_68965.png"

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="topFooter">
          <div className="topFooter-item">{"회원가입약관"}</div>
          <div className="topFooter-item">{"서비스이용약관"}</div>
          <div className="topFooter-item"><strong>개인정보처리방침</strong></div>
          <div className="topFooter-item">{"와디즈 운영정책"}</div>
          <div className="topFooter-item">{"펀딩 운영정책"}</div>
          <div className="topFooter-item">{"투자 운영정책"}</div>
          <div className="topFooter-item">{"스타트업 찾기 운영정책"}</div>
          <div className="topFooter-item">{"제휴문의"}</div>
          <div className="topFooter-item">{"공지사항"}</div>
          <div className="topFooter-item">{"인재채용"}</div>
          <div className="topFooter-item">{"SNS"}</div>
        </div>
        <div className="middleFooter">
          <button className="call">
            <img src={question} alt="물음표" />
            <div>와디즈에 문의하기</div>
          </button>
          <div className="firstSection">
            <div>
              <strong>와디즈 대표 고객 센터</strong>|info@wadiz.kr|1661-9056
            </div>
            <div>
              상담 가능 시간 : 평일 오전 9시 ~ 오후 6시 (주말,공휴일 제외)
            </div>
          </div>
          <div className="secondSection">
            <div>
              와디즈플랫폼 (주)|대표이사 최동철|사업자등록번호 220-88-37661|
            </div>
            <div>
              경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 A동 4층
              402호
            </div>
          </div>
          <div className="thirdSection">
            <img className="appleLogo" src={appleSVG} alt="에플" />
            <div>iOS 앱</div>
            <img className="andLogo" src={andriodSVG} alt="안드로이드" />
            <div>안드로이드 앱</div>
          </div>
        </div>
        <div className="copyright">
          <strong>© wadiz Platform Co., Ltd.</strong>
        </div>
        <div className="bottomFooter">
          <strong>투자위험고지</strong> 비상장기업 투자는 원금 손실의 가능성이
          크니 <u>투자 위험 안내</u>를 꼭 확인하세요.
        </div>
      </div >
    );
  }
}

export default Footer;
