import React, { Component } from "react";

import _rug from "./rug.jpg";
import _sketch from "../../sketches/sketch";

import FolderFileIcon from "../../k95/fileIcons/FolderFileIcon";
import PhotoFileIcon from "../../k95/fileIcons/PhotoFileIcon";
import P5FileIcon from "../../k95/fileIcons/P5FileIcon";

export default class GalleryFolder extends Component {
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
          initState={{ saturation: 100 }}
          getInputs={this.getInputs}
        ></P5FileIcon>
      </FolderFileIcon>
    );
  }

  getInputs(win) {
    win.onSliderChange = (event) =>
      win.setState({ saturation: +event.target.value });

    console.log(win);

    return (
      <div className="Input-Container">
        <p>Saturation</p>
        <input
          type="range"
          min={0}
          max={255}
          step={1}
          value={win.state.saturation}
          onChange={win.onSliderChange}
        />
      </div>
    );
  }
}
