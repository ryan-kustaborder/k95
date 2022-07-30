import React, { Component } from "react";
import image from "../images/icons/folder.png";
import DraggableWindow from "./DraggableWindow";

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
    this.setState({
      active: false,
    });
  }

  render() {
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
          <DraggableWindow
            active={this.state.active}
            onCloseWindow={this.onCloseWindow.bind(this)}
          />
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
