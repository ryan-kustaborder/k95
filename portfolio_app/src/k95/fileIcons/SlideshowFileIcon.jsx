import React from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../../icons/display.png";
import SlideshowWindow from "../windows/SlideshowWindow";

export default class SlideshowFileIcon extends FileIcon {
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
