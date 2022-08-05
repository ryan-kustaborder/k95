import React, { Component } from "react";

import ResizeWrapper from "./ResizableWrapper";
import TabbedWrapper from "./TabbedWrapper";
import Window from "./Window";

export default class ArticleWindow extends Component {
  render() {
    return (
      <Window
        title={this.props.title}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper onCloseWindow={() => {}}>
          <TabbedWrapper
            active={"0"}
            tabNames={["Tab 1", "Tab 2", "Tab 3"]}
            content={[]}
          />
        </ResizeWrapper>
      </Window>
    );
  }
}
