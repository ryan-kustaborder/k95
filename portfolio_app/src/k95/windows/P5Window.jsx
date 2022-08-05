import React, { Component } from "react";

import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";
import P5Wrapper from "../wrappers/P5Wrapper";

export default class P5Window extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.initState;

    this.ref = React.createRef();
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb);

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
          <div className="vertical-layout">
            <P5Wrapper
              p5Props={this.state}
              onSetAppState={this.onSetAppState}
              sketch={this.props.sketch}
            ></P5Wrapper>
            {this.props.getInputs(this)}
          </div>
        </ResizeWrapper>
      </Window>
    );
  }
}