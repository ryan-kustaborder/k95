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
            <span>{this.props.bounds.min}</span>
            <span>{this.props.bounds.max}</span>
          </div>
        </div>
      </div>
    );
  }
}
