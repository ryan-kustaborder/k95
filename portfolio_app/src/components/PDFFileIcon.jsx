import React, { Component } from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../images/icons/display.png";
import PDFWindow from "./PDFWindow";

export default class PDFFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <PDFWindow
          title={this.props.title}
          key={this.props.image}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          <img src={this.props.image} alt={this.props.alt}></img>
        </PDFWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
