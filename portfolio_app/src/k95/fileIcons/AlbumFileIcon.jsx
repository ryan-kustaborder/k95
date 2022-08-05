import React from "react";
import FileIcon from "./FileIcon";
import ICON from "../../icons/photo-album.png";
import AlbumWindow from "../windows/AlbumWindow";

export default class AlbumFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <AlbumWindow
          title={this.props.title}
          key={this.props.image}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
          images={this.props.images}
        ></AlbumWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return ICON;
  }
}
