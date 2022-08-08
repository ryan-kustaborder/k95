import React from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import ScrollableWrapper from "../wrappers/ScrollableWrapper";

import json from "../../documents/booklet/booklet.json";

export default class PDFWindow extends Window {
  constructor(props) {
    super(props);

    this.paths = [];

    for (let i = 1; i <= json.length; i++) {
      this.paths.push("_" + i + ".png");
    }
  }

  getInnerContent() {
    let pages = this.paths.map((path) => {
      return (
        <img
          key={json.folder + "/" + path}
          src={`${process.env.PUBLIC_URL}/documents/${json.folder}/${path}`}
          alt="pdf page"
        ></img>
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
