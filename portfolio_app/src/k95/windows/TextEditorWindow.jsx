import React, { Component } from "react";
import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";

export default class TextEditorWindow extends Component {
  render() {
    return (
      <Window onCloseWindow={() => {}}>
        <ResizeWrapper onCloseWindow={() => {}}>
          <BlankContainer />
        </ResizeWrapper>
      </Window>
    );
  }
}
