import React, { Component } from "react";

export default class BlankContainer extends Component {
  render() {
    return <div className="blank-container in">{this.props.children}</div>;
  }
}
