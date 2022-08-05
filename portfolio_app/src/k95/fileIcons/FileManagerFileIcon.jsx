import React from "react";
import FileIcon from "../k95/fileIcons/FileIcon";
import GALLERY_ICON from "../images/icons/documents.png";
import FileManagerWindow from "./FileManagerWindow";

export default class FileManagerFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <FileManagerWindow
          title={this.props.title}
          key={"Window - " + this.props.title}
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
    return GALLERY_ICON;
  }
}
