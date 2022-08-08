import React from "react";
import FileIcon from "./FileIcon";
import ICON from "../../icons/documents.png";
import PDFWindow from "../windows/PDFWindow";

export default class PDFFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <PDFWindow
          title={this.props.title}
          key={"Window - " + this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          {this.props.children}
        </PDFWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return ICON;
  }
}
