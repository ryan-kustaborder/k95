import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import ScrollableWrapper from "../wrappers/ScrollableWrapper";

export default class FolderWindow extends Window {
  getInnerContent() {
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <ScrollableWrapper>
          <div className="blank-container">
            <div className="file-grid">{this.props.children}</div>
          </div>
        </ScrollableWrapper>
      </ResizeWrapper>
    );
  }
}
