import React from "react";
import FileIcon from "./FileIcon";
import PhotoWindow from "./PhotoWindow";
import PHOTO_ICON from "../images/icons/globe.png";

export default class PhotoFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <PhotoWindow
          title="Photo Window"
          key={this.props.image}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          <img src={this.props.image} alt={this.props.alt}></img>
        </PhotoWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
