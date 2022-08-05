import React from "react";
import FileIcon from "./FileIcon";
import ICON from "../../icons/photo-album.png";
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
    return ICON;
  }
}
