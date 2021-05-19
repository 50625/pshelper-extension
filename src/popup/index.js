import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Popup extends React.Component {
    render() {
        return (
          <div className="Popup">
            <div className="Popup-body">
              <div className="App-logo">
                <div className="Logo">PSHELPER</div>
                <div className="Logo-sub">2021</div>
              </div>
            </div>
        </div>
        );
    }
}

ReactDOM.render(
  <Popup />,
  document.getElementById("root")
);