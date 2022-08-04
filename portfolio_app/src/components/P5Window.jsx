import React, { Component } from "react";
import p5 from "p5";

import sketch from "../sketches/sketch";

import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";
import P5Wrapper from "./P5Wrapper";

export default class P5Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 100,
      frameRate: null,
    };

    this.ref = React.createRef();
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb);

  onSliderChange = (event) => this.setState({ slider: +event.target.value });

  componentDidMount() {
    this.myP5 = new p5(sketch, this.ref.current);

    this.myP5.props = this.props.p5;

    this.myP5.onSetAppState = this.onSetAppState;
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
            p5Props={{ slider: this.state.slider }}
            onSetAppState={this.onSetAppState}
          ></P5Wrapper>
        </ResizeWrapper>
        <input
          type="range"
          min={5}
          max={290}
          step={1}
          value={this.state.slider}
          style={{ width: "90%", maxWidth: "900px" }}
          onChange={this.onSliderChange}
        />
      </Window>
    );
  }
}
