import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

export default class PhotoWindow extends Window {
  getInnerContent() {
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <BlankContainer>Browser Window</BlankContainer>
      </ResizeWrapper>
    );
  }
}
