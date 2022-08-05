import React, { Component } from "react";
import P5Window from "./P5Window";

import sketch from "../sketches/sketch";

export default class TestP5Window extends P5Window {
  constructor(props) {
    super(props);

    this.state = { slider: 100 };
  }

  onSliderChange = (event) => this.setState({ slider: +event.target.value });

  getSketch() {
    return sketch;
  }

  getInputs() {
    return (
      <input
        type="range"
        min={5}
        max={290}
        step={1}
        value={this.state.slider}
        style={{ width: "90%", maxWidth: "900px" }}
        onChange={this.onSliderChange}
      />
    );
  }
}
