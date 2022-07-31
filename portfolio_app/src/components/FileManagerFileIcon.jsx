import React from "react";
import FileIcon from "./FileIcon";
import FILE_MANAGER_ICON from "../images/icons/file-manager.png";
import FileManagerWindow from "./FileManagerWindow";

export default class FileManagerFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <FileManagerWindow
          title="File Manager"
          key={"File Manager"}
          active={this.state.active}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          {this.props.children}
        </FileManagerWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return FILE_MANAGER_ICON;
  }
}
