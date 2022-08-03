import React, { Component } from "react";

import ResizeWrapper from "./ResizableWrapper";
import Window from "./Window";

export default class ArticleWindow extends Component {
  render() {
    return (
      <Window
        title={this.props.title}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper onCloseWindow={() => {}}>
          <div className="blank-container">{this.props.children}</div>
        </ResizeWrapper>
      </Window>
    );
  }
}
