import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import ScrollableWrapper from "../wrappers/ScrollableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

import json from "../../documents/booklet/booklet.json";

const DOCUMENTS_PATH = "portfolio_app/src/documents/";

export default class PDFWindow extends Window {
  constructor(props) {
    super(props);

    console.log(json);
    this.path = `${process.env.PUBLIC_URL}/documents/booklet/_.png`;

    console.log(this.path);
  }

  getInnerContent() {
    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <ScrollableWrapper>
          <BlankContainer>
            <img src={this.path} />
          </BlankContainer>
        </ScrollableWrapper>
      </ResizeWrapper>
    );
  }
}
