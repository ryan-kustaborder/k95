import React from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../images/icons/display.png";
import P5Window from "./P5Window";
import TestP5Window from "./TestP5Window";

export default class P5FileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <TestP5Window
          title={this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
          sketch={this.props.sketch}
        ></TestP5Window>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
