import React from "react";

import PHOTO_ICON from "../../icons/display.png";
import ArticleWindow from "../windows/ArticleWindow";
import FileIcon from "./FileIcon";

export default class ArticleFileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <ArticleWindow
          title={this.props.title}
          key={"Window - " + this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          {this.props.children}
        </ArticleWindow>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return PHOTO_ICON;
  }
}
