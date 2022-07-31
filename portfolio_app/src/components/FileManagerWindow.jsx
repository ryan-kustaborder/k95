import React, { Component } from "react";
import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";
import ScrollableWrapper from "./ScrollableWrapper";

export default class FileManagerWindow extends Component {
  render() {
    return (
      <Window
        title={this.props.title}
        active={true}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper active={true} onCloseWindow={() => {}}>
          <ScrollableWrapper>
            <div className="blank-container">
              <div className="file-grid">{this.props.children}</div>
            </div>
          </ScrollableWrapper>
        </ResizeWrapper>
      </Window>
    );
  }
}
