import React from "react";
import FileIcon from "./FileIcon";
import PHOTO_ICON from "../images/icons/display.png";
import P5Window from "./P5Window";

import sketch from "../sketches/sketch";

export default class P5FileIcon extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <P5Window
          title={this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
          sketch={this.getSketch()}
          initState={this.getInitState()}
          getInputs={this.getInputs}
        ></P5Window>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getInitState() {
    return { slider: 100 };
  }

  getIcon() {
    return PHOTO_ICON;
  }

  getSketch() {
    return sketch;
  }

  getInputs(win) {
    win.onSliderChange = (event) =>
      win.setState({ slider: +event.target.value });

    return (
      <input
        type="range"
        min={5}
        max={290}
        step={1}
        value={win.state.slider}
        style={{ width: "90%", maxWidth: "900px" }}
        onChange={win.onSliderChange}
      />
    );
  }
}
