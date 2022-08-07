import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
  }

  render() {
    return <div className="Clock">{this.state.time}</div>;
  }

  updateTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();

    let ampm = h >= 12 ? "PM" : "AM";
    this.setState({ time: (h % 12) + ":" + m + " " + ampm });
  }

  componentDidMount() {
    this.updateTime();
    setInterval(this.updateTime.bind(this), 10000);
  }
}
