import React, { Component } from "react";
import DraggableWindow from "./DraggableWindow";
import ResizeWrapper from "./ResizableWrapper";

export default class TextEditorWindow extends Component {
  render() {
    return (
      <DraggableWindow active={true} onCloseWindow={() => {}}>
        <ResizeWrapper active={true} onCloseWindow={() => {}}>
          <div className="blank-container"></div>
        </ResizeWrapper>
      </DraggableWindow>
    );
  }
}
