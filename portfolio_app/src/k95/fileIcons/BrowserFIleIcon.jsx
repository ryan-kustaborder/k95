import React from "react";
import FileIcon from "./FileIcon";
import BrowserWindow from "../windows/BrowserWindow";
import GLOBE_ICON from "../../icons/globe.png";

export default class BrowserFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <BrowserWindow
          title={this.props.title}
          key={"Window - " + this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        />
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return GLOBE_ICON;
  }
}
