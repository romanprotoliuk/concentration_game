import React from "react";
import { Link } from "react-router-dom";

const HardLevel = ({ handleMenuClick }) => {
  return (
    <div className="main-container">
      <div className="rules-hard">
        <a href="#" className="rules-for-game-hard">
          rules
        </a>
      </div>
      <div className="wrapper-button">
        <a href="#" className="button" id="btn-reset">
          Play Again
        </a>
        <Link onClick={handleMenuClick} className="hard-gotomenu-button">
          Menu
        </Link>
      </div>
      <div className="platform">
        <div className="wrapper-for-score-and-time">
          <div className="container-wrapper-score">
            <div className="wrapper-score">
              <h2 className="your-score-dummy-text">Your score:</h2>
              <h2 className="score">0</h2>
            </div>
          </div>
          <div className="container-wrapper-time">
            <div className="wrapper-time">
              <div className="wrapper-container-timer">
                <h3 className="heading-timer"></h3>
              </div>
            </div>
          </div>
          {/* <!-- change this to wrapper-final-prompt in CSS --> */}
          <div className="wrapper-final-prompt wrapper-final-prompt-hide">
            <div className="endgame-wrapper">
              <h1 className="heading">End Game</h1>
              <div className="wrapper-time-endgame">
                <h3 className="heading-2">Time:</h3>
                <h3 className="heading-3-time">02:30</h3>
              </div>
              <div className="wrapping-score-endgame">
                <h3 className="heading-2">Score:</h3>
                <h3 className="prompt-heading-score">18</h3>
              </div>
              <div className="wrapping-score-endgame">
                <h3 className="heading-2">Accuracy</h3>
                <h3 className="accuracy">100%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="card click-card" id="0">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="1">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="2">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="3">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="4">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="5">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="6">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="7">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="8">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="9">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="10">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="11">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="12">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="13">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="14">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="15">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="16">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="17">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="18">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="19">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="20">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="21">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="22">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="23">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="24">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="25">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="26">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="27">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="28">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="29">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="30">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="31">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="32">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="33">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="34">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
          <div className="card click-card" id="35">
            {/* <!-- front --> */}
            <div className="front card-face">
              <div className="card-img-overlay"></div>
            </div>
            {/* <!--back --> */}
            <div className="back card-face rounded text-center">
              <div className="card-body mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardLevel;
