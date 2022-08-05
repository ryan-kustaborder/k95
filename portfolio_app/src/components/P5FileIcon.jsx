import React from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../images/icons/display.png";
import P5Window from "./P5Window";

import sketch from "../sketches/sketch";

export default class P5FileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <P5Window
          title={this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
          sketch={this.getSketch()}
          initState={this.props.initState}
          getInputs={this.props.getInputs}
        ></P5Window>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }

  getSketch() {
    return sketch;
  }
}
