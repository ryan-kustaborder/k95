import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";

export default class PhotoWindow extends Window {
  getInnerContent() {
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <div className="blank-container">{this.props.children}</div>
      </ResizeWrapper>
    );
  }
}
