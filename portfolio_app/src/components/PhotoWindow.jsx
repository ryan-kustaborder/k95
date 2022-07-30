import React, { Component } from "react";
import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

export default class PhotoWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Window title={this.props.title} active={true} onCloseWindow={() => {}}>
        <ResizeWrapper active={true} onCloseWindow={() => {}}>
          <div className="blank-container">{this.props.children}</div>
        </ResizeWrapper>
      </Window>
    );
  }
}
