import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import ScrollableWrapper from "../wrappers/ScrollableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

export default class PDFWindow extends Window {
  constructor(props) {
    super(props);

    //getDocument("helloworld.pdf");
  }

  getInnerContent() {
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <ScrollableWrapper>
          <BlankContainer>pdf window</BlankContainer>
        </ScrollableWrapper>
      </ResizeWrapper>
    );
  }
}
