import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

export default class BrowserWindow extends Window {
  getInnerContent() {
    window.open("https://www.codexworld.com", "_blank");
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <BlankContainer>{this.props.children}</BlankContainer>
      </ResizeWrapper>
    );
  }
}
