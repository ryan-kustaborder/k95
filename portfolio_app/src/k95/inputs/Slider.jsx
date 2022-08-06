import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <input
        type="range"
        min={this.props.bounds.min}
        max={this.props.bounds.max}
        step={this.props.bounds.step}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
