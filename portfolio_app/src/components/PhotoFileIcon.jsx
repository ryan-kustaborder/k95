import React, { Component } from "react";
import FileIcon from "./FileIcon";
import PhotoWindow from "./PhotoWindow";
import Window from "./Window";
import PHOTO_ICON from "../images/icons/globe.png";

export default class PhotoFileIcon extends FileIcon {
  constructor(props) {
    super(props);
  }
  getInnerWindow() {
    return (
      <PhotoWindow
        title="Photo Window"
        active={this.state.active}
        onCloseWindow={this.onCloseWindow.bind(this)}
      >
        <img src={this.props.image}></img>
      </PhotoWindow>
    );
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
