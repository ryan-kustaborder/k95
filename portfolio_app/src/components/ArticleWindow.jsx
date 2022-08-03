import React, { Component } from "react";

import ResizeWrapper from "./ResizableWrapper";
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
          <div className="tabset">
            <div className="tabset-tabs">
              <button>Tab 1</button>
              <button>Tab 2</button>
              <button>Tab 3</button>
              <button>Tab 4</button>
            </div>
            <div className="tabset-content out">Content content content</div>
          </div>
        </ResizeWrapper>
      </Window>
    );
  }
}
