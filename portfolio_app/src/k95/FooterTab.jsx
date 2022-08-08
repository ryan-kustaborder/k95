import React, { Component } from "react";

export default class FooterTab extends Component {
  render() {
    return (
      <div className="FooterTab out" onClick={this.selectWindow.bind(this)}>
        <p>{this.props.window.props.title}</p>
      </div>
    );
  }

  selectWindow() {
    this.props.desktop.selectWindow(this.props.window).bind(this.props.desktop);
  }
}
