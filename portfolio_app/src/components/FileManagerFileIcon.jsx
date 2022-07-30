import React, { Component } from "react";
import FileIcon from "./FileIcon";
import PhotoWindow from "./PhotoWindow";
import FILE_MANAGER_ICON from "../images/icons/file-manager.png";
import FileManagerWindow from "./FileManagerWindow";

export default class FileManagerFileIcon extends FileIcon {
  getInnerWindow() {
    return (
      <FileManagerWindow
        title="File Manager"
        active={this.state.active}
        onCloseWindow={this.onCloseWindow.bind(this)}
      >
        {this.props.children}
      </FileManagerWindow>
    );
  }

  getIcon() {
    return FILE_MANAGER_ICON;
  }
}
