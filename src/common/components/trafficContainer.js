import React, { Component } from 'react';

export default class TrafficContainer extends Component {
  constructor(props) {
      super(props);
  }

  static renderNetworkTrafficData(requests) {
    if (requests) {
      return Object.keys(requests).map((key) => {
          const {url, requestDuration, status} = requests[key];
          return (<li>{`url ${url} took ${requestDuration}ms with status ${status}`}</li>);
      });
    }
    return 'ha';
  }

  render() {
    return (
      <div>
        here
        <ul>
          {TrafficContainer.renderNetworkTrafficData(this.props.traffic.requests)}
        </ul>
        </div>
    );
  }
}