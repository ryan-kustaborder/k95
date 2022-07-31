import React, { Component } from "react";
import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

export default class TextEditorWindow extends Component {
  render() {
    return (
      <Window active={true} onCloseWindow={() => {}}>
        <ResizeWrapper active={true} onCloseWindow={() => {}}>
          <div className="blank-container"></div>
        </ResizeWrapper>
      </Window>
    );
  }
}