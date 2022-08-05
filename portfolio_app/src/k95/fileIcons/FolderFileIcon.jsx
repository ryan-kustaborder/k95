import React from "react";
import FileIcon from "./FileIcon";
import ICON from "../../icons/documents.png";
import FolderWindow from "../windows/FolderWindow";

export default class FolderFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <FolderWindow
          title={this.props.title}
          key={"Window - " + this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          {this.props.children}
        </FolderWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return ICON;
  }
}
