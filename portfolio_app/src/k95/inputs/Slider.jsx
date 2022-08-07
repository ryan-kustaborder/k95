import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <label>{this.props.label}</label>
        <div>
          <input
            type="range"
            min={this.props.bounds.min}
            max={this.props.bounds.max}
            step={this.props.bounds.step}
            value={this.props.value}
            onChange={this.props.onChange}
            list="steplist"
          />
          <div className="ticks">
            <span>0</span>
            <span>255</span>
          </div>
        </div>
      </div>
    );
  }
}
