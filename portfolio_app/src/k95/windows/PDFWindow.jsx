import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import ScrollableWrapper from "../wrappers/ScrollableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

import json from "../../documents/booklet/booklet.json";

export default class PDFWindow extends Window {
  getInnerContent() {
    let pages = json.pages.map((path) => {
      return (
        <img src={`${process.env.PUBLIC_URL}/documents/booklet/${path}`}></img>
      );
    });

    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <div className="pdf">
          <ScrollableWrapper>{pages}</ScrollableWrapper>
        </div>
      </ResizeWrapper>
    );
  }
}
