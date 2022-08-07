import React from "react";
import FileIcon from "./FileIcon";
import PhotoWindow from "../windows/PhotoWindow";
import PHOTO_ICON from "../../icons/photo.png";

export default class PhotoFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <PhotoWindow
          title={this.props.title}
          key={this.props.image}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          <img src={this.props.image} alt={this.props.alt}></img>
          test
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
