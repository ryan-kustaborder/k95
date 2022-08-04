import React from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../images/icons/display.png";
import SlideshowWindow from "./SlideshowWindow";

export default class PDFFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <SlideshowWindow
          title={this.props.title}
          key={this.props.image}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
          images={this.props.images}
        ></SlideshowWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
