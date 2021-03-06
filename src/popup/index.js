import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithmIsToggled : false,
      highlightIsToggled : false,
      keywordIsToggled : false
    };
    this.handleAlgorithmIsToggled = this.handleAlgorithmIsToggled.bind(this);
    this.handleHighLightIsToggled = this.handleHighLightIsToggled.bind(this);
    this.handleKeywordIsToggled = this.handleKeywordIsToggled.bind(this);
  };

  handleAlgorithmIsToggled() {
    chrome.extension.getBackgroundPage().console.log("handleAlgorithmIsToggled");
    
    if (!this.state.algorithmIsToggled) {
      chrome.runtime.sendMessage({ action: "postAnalyzeAlgorithm"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    } 
    else {
      chrome.runtime.sendMessage({ action: "turnOffAnalyzeAlgorithm"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    }

    this.setState({ algorithmIsToggled: !this.state.algorithmIsToggled });
  }

  handleHighLightIsToggled() {
    chrome.extension.getBackgroundPage().console.log("handleHighLightIsToggled");

    if (!this.state.highlightIsToggled) {
      chrome.runtime.sendMessage({ action: "postHighlight"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    } 
    else {
      chrome.runtime.sendMessage({ action: "turnOffHighlight"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    }
    this.setState({ highlightIsToggled: !this.state.highlightIsToggled });
  }

  handleKeywordIsToggled() {
    chrome.extension.getBackgroundPage().console.log("handleKeywordIsToggled");

    if (!this.state.keywordIsToggled) {
      chrome.runtime.sendMessage({ action: "postKeyword"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    } 
    // else {
    //   chrome.runtime.sendMessage({ action: "turnOffKeyword"}, function(response) {
    //     chrome.extension.getBackgroundPage().console.log(response);
    //   });
    // }
    this.setState({ keywordIsToggled: !this.state.keywordIsToggled });
  }

  componentDidMount() {
    /*global chrome*/
  }


  render() {
    const Footer = styled.footer`
      display: block;
      text-align: center;
      font-size: 10px;
      maring-top: 10px;
    `;
    const CheckBoxWrapper = styled.div`
      position: relative;
      `;
    const CheckBoxLabel = styled.label`
      position: absolute;
      top: 0;
      left: 0;
      width: 42px;
      height: 26px;
      border-radius: 15px;
      background: #bebebe;
      cursor: pointer;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
      }
      `;
    const CheckBox = styled.input`
      opacity: 0;
      z-index: 1;
      border-radius: 15px;
      width: 42px;
      height: 26px;
      &:checked + ${CheckBoxLabel} {
        background: rgb(59, 96, 229);
        &::after {
          content: "";
          display: block;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          margin-left: 21px;
          transition: 0.2s;
        }
      }
      `;

    return (
      <div className="Popup">
        <div className="Popup-body">
          <div className="App-logo">
            <div className="Logo">PSHELPER</div>
            <div className="Logo-sub">2021</div>
          </div>
          <div className="Input">
            <div className="Swich-body">
              ???????????? ?????? ??????
              <CheckBoxWrapper>
                <CheckBox id="algorithm" type="checkbox"
                  checked={this.state.algorithmIsToggled}
                  onChange={this.handleAlgorithmIsToggled} />
                <CheckBoxLabel htmlFor="algorithm" />
              </CheckBoxWrapper>
            </div>
            <div className="Swich-body">
              ?????????, ?????? ?????? ??????
              <CheckBoxWrapper>
                <CheckBox id="highlight" type="checkbox" 
                  checked={this.state.highlightIsToggled}
                  onChange={this.handleHighLightIsToggled} />
                <CheckBoxLabel htmlFor="highlight" />
              </CheckBoxWrapper>
            </div>
            <div className="Swich-body">
              ?????? ?????? ?????? ??????
              <CheckBoxWrapper>
                <CheckBox id="keyword" type="checkbox" 
                  checked={this.state.keywordIsToggled}
                  onChange={this.handleKeywordIsToggled}
                  />
                <CheckBoxLabel htmlFor="keyword" />
              </CheckBoxWrapper>
            </div>
          </div>
          <Footer>?? 2021 50625, Inc. All right reserved.</Footer>
        </div>
    </div>
    );
  }
}

ReactDOM.render(
  <Popup />,
  document.getElementById("root")
);