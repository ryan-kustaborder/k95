import React, { Component } from "react";
import p5 from "p5";

import sketch from "../sketches/sketch";

import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

export default class P5Window extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = { slider: 200 };
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb);

  onSliderChange = (event) => this.setState({ slider: +event.target.value });

  componentDidMount() {
    this.myP5 = new p5(sketch, this.ref.current);

    this.myP5.props = { slider: this.state.slider };

    this.myP5.onSetAppState = this.onSetAppState;
  }

  shouldComponentUpdate(nextProps) {
    this.myP5.props = { slider: this.state.slider };
    return false;
  }

  updateState() {
    this.setState({ slider: this.state.slider + 20 });
    console.log(this.state);
  }

  render() {
    return (
      <Window
        title={this.props.title}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper onCloseWindow={() => {}}>
          <div ref={this.ref} className="blank-container"></div>
        </ResizeWrapper>
        <button onClick={this.updateState.bind(this)}>Test</button>
      </Window>
    );
  }
}
