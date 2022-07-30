import React, { Component } from "react";
import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

export default class FileManagerWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Window
        title={this.props.title}
        active={true}
        onCloseWindow={this.props.onCloseWindow}
      >
        <ResizeWrapper active={true} onCloseWindow={() => {}}>
          <div className="blank-container">
            <div className="file-grid">{this.props.children}</div>
          </div>
        </ResizeWrapper>
      </Window>
    );
  }
}
