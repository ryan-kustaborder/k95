import React from "react";
import FileIcon from "./FileIcon";
import PhotoWindow from "./PhotoWindow";
import PHOTO_ICON from "../images/icons/globe.png";

export default class PhotoFileIcon extends FileIcon {
  getInnerWindow() {
    return (
      <PhotoWindow
        title="Photo Window"
        active={this.state.active}
        onCloseWindow={this.onCloseWindow.bind(this)}
      >
        <img src={this.props.image} alt={this.props.alt}></img>
      </PhotoWindow>
    );
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
