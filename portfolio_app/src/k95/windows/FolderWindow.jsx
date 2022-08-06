import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import ScrollableWrapper from "../wrappers/ScrollableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

export default class FolderWindow extends Window {
  getInnerContent() {
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <ScrollableWrapper>
          <BlankContainer>
            <div className="file-grid">{this.props.children}</div>
          </BlankContainer>
        </ScrollableWrapper>
      </ResizeWrapper>
    );
  }
}
