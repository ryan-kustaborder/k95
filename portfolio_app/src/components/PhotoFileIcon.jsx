import React, { Component } from "react";
import DesktopIcon from "./DesktopIcon";
import PhotoWindow from "./PhotoWindow";
import Window from "./Window";

export default class PhotoFileIcon extends DesktopIcon {
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
}
