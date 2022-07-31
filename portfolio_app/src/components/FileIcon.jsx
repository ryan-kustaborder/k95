import React, { Component } from "react";
import file from "../images/icons/file.png";
import Window from "./Window";

export default class FileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.ref = React.createRef();
  }

  onDoubleClick() {
    this.props.onAddWindow(this.getInnerWindow());
  }

  onCloseWindow() {
    this.setState({
      active: false,
    });
  }

  getInnerWindow() {
    return (
      <Window
        active={this.state.active}
        onCloseWindow={this.onCloseWindow.bind(this)}
      />
    );
  }

  getIcon() {
    return file;
  }

  render() {
    let style = this.props.useDarkText ? "DesktopIcon dark" : "DesktopIcon";

    if (this.state.active) {
      return (
        <>
          <div className={style} onDoubleClick={this.onDoubleClick.bind(this)}>
            <img alt={this.props.alt} src={this.getIcon()}></img>
            <p>This Folder Has A Long Name</p>
          </div>
          {this.getInnerWindow()}
        </>
      );
    } else {
      return (
        <>
          <div className={style} onDoubleClick={this.onDoubleClick.bind(this)}>
            <img alt={this.props.alt} src={this.getIcon()}></img>
            <p>This Folder Has A Long Name</p>
          </div>
        </>
      );
    }
  }
}
