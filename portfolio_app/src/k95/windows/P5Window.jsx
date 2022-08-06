import React, { Component } from "react";

import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import P5Wrapper from "../wrappers/P5Wrapper";

export default class P5Window extends Window {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.setState({ p5Props: this.props.initState });
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb);

  getInnerContent() {
    return (
      <ResizeWrapper
        width={this.props.initState.width}
        height={this.props.initState.height}
        onCloseWindow={() => {}}
      >
        <div className="vertical-layout">
          <div className="blank-container in">
            <P5Wrapper
              p5Props={this.state.p5Props}
              onSetAppState={this.onSetAppState}
              sketch={this.props.sketch}
            ></P5Wrapper>
          </div>
          {this.props.getInputs(this)}
        </div>
      </ResizeWrapper>
    );
  }
}
