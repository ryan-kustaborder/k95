import React, { Component } from "react";
import folder from "../images/icons/folder.png";
import file from "../images/icons/file.png";
import Window from "./Window";

export default class DesktopIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.ref = React.createRef();
  }

  onDoubleClick() {
    this.setState({
      active: true,
    });
  }

  onCloseWindow() {
    console.log(this);
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

  render() {
    let image;

    switch (this.props.icon) {
      case "FOLDER":
        image = folder;
        break;
      case "FILE":
        image = file;
        break;
    }

    if (this.state.active) {
      return (
        <>
          <div
            className="DesktopIcon"
            onDoubleClick={this.onDoubleClick.bind(this)}
          >
            <img src={image}></img>
            <p>This Folder Has A Long Name</p>
          </div>
          {this.getInnerWindow()}
        </>
      );
    } else {
      return (
        <>
          <div
            className="DesktopIcon"
            onDoubleClick={this.onDoubleClick.bind(this)}
          >
            <img src={image}></img>
            <p>This Folder Has A Long Name</p>
          </div>
        </>
      );
    }
  }
}
