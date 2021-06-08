import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';
import Switch from "../common/components/switch";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithmIsToggled : false,
      highlightIsToggled : false,
      keywordIsToggled : false,
    };
  };

  setIsToggled() {
    this.setState((event) => {
      chrome.extension.getBackgroundPage().console.log(event);
      
    });
  }

  // FIXME: state doesn't change

  setAlgorithmIsToggled(flag) {
    this.setState(() => {
      if (flag) this.algorithmIsToggled = false;
      else this.algorithmIsToggled = true;
      chrome.extension.getBackgroundPage().console.log("setAlgorithmIsToggled");
      chrome.extension.getBackgroundPage().console.log(this.state);
    });
    
    chrome.runtime.sendMessage({ action: "postAnalyzeAlgorithm"}, function(response) {
      chrome.extension.getBackgroundPage().console.log(response);
    });
  }

  setHighLightIsToggled(flag) {
    this.setState(() => {
      if (flag) this.highlightIsToggled = false;
      else this.highlightIsToggled = true;
      chrome.extension.getBackgroundPage().console.log("setHighLightIsToggled");
      chrome.extension.getBackgroundPage().console.log(this.state);

      chrome.runtime.sendMessage({ action: "postHighlight"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    });
  }

  setKeywordIsToggled(flag) {
    this.setState(() => {
      if (flag) this.coreIsToggled = false;
      else this.coreIsToggled = true;
      chrome.extension.getBackgroundPage().console.log("setKeywordIsToggled");
      chrome.extension.getBackgroundPage().console.log(this.state);
      chrome.runtime.sendMessage({ action: "postKeyword"}, function(response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    });
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

    return (
      <div className="Popup">
        <div className="Popup-body">
          <div className="App-logo">
            <div className="Logo">PSHELPER</div>
            <div className="Logo-sub">2021</div>
          </div>
          <div className="Input">
            <div className="Swich-body">
              알고리즘 분류 확인
              <Switch
                id="var-switch"
                toggled={this.state.algorithmIsToggled}
                onChange={e => this.setAlgorithmIsToggled(this.state.algorithmIsToggled)}          
              />
            </div>
            <div className="Swich-body">
              하이라이팅 기능
              <Switch
                id="hilight-switch"
                toggled={this.state.highlightIsToggled}
                onChange={e => this.setHighLightIsToggled(this.state.highlightIsToggled)}          
              />
            </div>
            <div className="Swich-body">
              핵심 단어 체크 기능
              <Switch
                id="core-switch"
                toggled={this.state.keywordIsToggled}
                onChange={e => this.setKeywordIsToggled(this.state.keywordIsToggled)}          
              />
            </div>
          </div>
          <Footer>© 2021 50625, Inc. All right reserved.</Footer>
        </div>
    </div>
    );
  }
}

ReactDOM.render(
  <Popup />,
  document.getElementById("root")
);