import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';
import Switch from "../common/components/switch";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hilightIsToggled : false,
      coreIsToggled : false,
      variableIsToggled : false,
    };
  };

  setIsToggled() {
    this.setState((event) => {
      chrome.extension.getBackgroundPage().console.log(event);
    });
  }

  componentDidMount() {
    /*global chrome*/
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function(response) {
        if (response) {
          chrome.extension.getBackgroundPage().console.log(response['problem_description']);
          chrome.extension.getBackgroundPage().console.log(response['problem_input']);
          chrome.extension.getBackgroundPage().console.log(response['problem_output']);
        } else {
          chrome.extension.getBackgroundPage().console.log("EMPTY");
        }
      });
    });
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
              하이라이팅 기능
              <Switch
                id="hilight-switch"
                toggled={this.hilightIsToggled}
                onChange={e => this.setIsToggled(e.target.checked)}          
              />
            </div>
            <div className="Swich-body">
              핵심 단어 체크 기능
              <Switch
                id="core-switch"
                toggled={this.coreIsToggled}
                onChange={e => this.setIsToggled(e.target.checked)}          
              />
            </div>
            <div className="Swich-body">
              변수 체크 기능
              <Switch
                id="var-switch"
                toggled={this.variableIsToggled}
                onChange={e => this.setIsToggled(e.target.checked)}          
              />
            </div>
          </div>
          {/* <TrarricContainer traffic={this.state.traffic}/> */}
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