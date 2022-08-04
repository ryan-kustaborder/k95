import React from "react";
import FileIcon from "./FileIcon";
import PhotoWindow from "./PhotoWindow";
import PHOTO_ICON from "../images/icons/display.png";
import P5Window from "./P5Window";

export default class P5FileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <P5Window
          title={this.props.title}
          key={this.props.image}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          <img src={this.props.image} alt={this.props.alt}></img>
        </P5Window>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
