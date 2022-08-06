import React, { Component } from "react";

import _rug from "./rug.jpg";
import _sketch from "../../sketches/sketch";

import FolderFileIcon from "../../k95/fileIcons/FolderFileIcon";
import PhotoFileIcon from "../../k95/fileIcons/PhotoFileIcon";
import P5FileIcon from "../../k95/fileIcons/P5FileIcon";

export default class GalleryFolder extends Component {
  constructor(props) {
    super(props);
    this.state = { saturation: 100 };
  }

  render() {
    return (
      <FolderFileIcon
        onAddWindow={this.props.onAddWindow}
        onRemoveWindow={this.props.onRemoveWindow}
        onSelectWindow={this.props.onSelectWindow}
        title={"Gallery"}
      >
        <PhotoFileIcon
          onAddWindow={this.props.onAddWindow}
          onRemoveWindow={this.props.onRemoveWindow}
          onSelectWindow={this.props.onSelectWindow}
          title={"rug.jpg"}
          useDarkText={true}
          image={_rug}
        ></PhotoFileIcon>
        <P5FileIcon
          onAddWindow={this.props.onAddWindow}
          onRemoveWindow={this.props.onRemoveWindow}
          onSelectWindow={this.props.onSelectWindow}
          title={"sketch.p5"}
          useDarkText={true}
          width={400}
          height={400}
          sketch={_sketch}
          initState={{ saturation: this.state.saturation }}
          onSetAppState={this.onSetAppState.bind(this)}
          getInputs={(win) => {
            return (
              <div style={{ textAlign: "center" }}>
                <input
                  type="range"
                  min={5}
                  max={290}
                  step={1}
                  value={win.state.saturation}
                  style={{ width: "90%", maxWidth: "900px" }}
                  onChange={win.onSliderChange}
                />
              </div>
            );
          }}
        ></P5FileIcon>
      </FolderFileIcon>
    );
  }

  onSliderChange = (event) => {
    this.setState({ saturation: +event.target.value });
  };

  onSetAppState = (newState, cb) => this.setState(newState, cb);
}
