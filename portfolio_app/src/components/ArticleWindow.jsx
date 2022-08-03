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
            content={[
              <TabbedWrapper
                active={"0"}
                tabNames={["Tab 1", "Tab 2", "Tab 3"]}
                content={["Content 1", "Content 2", "Content 3"]}
              />,
              "string",
              <TabbedWrapper
                active={"0"}
                tabNames={["Tab 7", "Tab 8", "Tab 9"]}
                content={["Content 15", "Content 25", "Content 53"]}
              />,
            ]}
          />
        </ResizeWrapper>
      </Window>
    );
  }
}
