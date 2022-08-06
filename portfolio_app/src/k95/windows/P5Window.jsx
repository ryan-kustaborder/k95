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

  getInnerContent() {
    return (
      <div className="vertical-layout">
        <div className="blank-container in">
          <P5Wrapper
            p5Props={this.state.p5Props}
            onSetAppState={this.props.onSetAppState}
            sketch={this.props.sketch}
            height={this.props.height}
            width={this.props.width}
          ></P5Wrapper>
        </div>
        {this.props.getInputs(this)}
      </div>
    );
  }
}
