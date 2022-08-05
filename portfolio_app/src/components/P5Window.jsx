import React, { Component } from "react";

import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";
import P5Wrapper from "./P5Wrapper";

export default class P5Window extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb);

  getSketch() {
    return null;
  }

  getInputs() {
    return <></>;
  }

  render() {
    return (
      <Window
        title={this.props.title}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper onCloseWindow={() => {}}>
          <P5Wrapper
            p5Props={this.state}
            onSetAppState={this.onSetAppState}
            sketch={this.getSketch()}
          ></P5Wrapper>
        </ResizeWrapper>
        {this.getInputs()}
      </Window>
    );
  }
}
