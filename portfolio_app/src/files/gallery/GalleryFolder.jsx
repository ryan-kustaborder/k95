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
          sketch={_sketch}
          initState={{ saturation: 100, width: 300, height: 300 }}
          getInputs={() => {
            return <p>Controls</p>;
          }}
        ></P5FileIcon>
      </FolderFileIcon>
    );
  }
}
