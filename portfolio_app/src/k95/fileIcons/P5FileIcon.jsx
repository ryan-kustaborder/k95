import React from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../../icons/display.png";
import P5Window from "../windows/P5Window";

export default class P5FileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <P5Window
          title={this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
          width={this.props.width}
          height={this.props.height}
          sketch={this.props.sketch}
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
}
