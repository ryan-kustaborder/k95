import React, { Component } from "react";
import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

export default class PhotoWindow extends Component {
  render() {
    return (
      <Window
        title={this.props.title}
        active={true}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper active={true} onCloseWindow={() => {}}>
          <div className="blank-container">{this.props.children}</div>
        </ResizeWrapper>
      </Window>
    );
  }
}
