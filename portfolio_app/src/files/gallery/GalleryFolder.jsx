import React, { Component } from "react";

import _rug from "./rug.jpg";

import FolderFileIcon from "../../k95/fileIcons/FolderFileIcon";
import PhotoFileIcon from "../../k95/fileIcons/PhotoFileIcon";
import P5FileIcon from "../../k95/fileIcons/P5FileIcon";
import PDFFileIcon from "../../k95/fileIcons/PDFFileIcon";

import HSBCircle from "../../sketches/HSBCircle";
import HSBGrid from "../../sketches/HSBGrid";

function _P5IconFromSketch(sketch, parent) {
  return (
    <P5FileIcon
      onAddWindow={parent.props.onAddWindow}
      onRemoveWindow={parent.props.onRemoveWindow}
      onSelectWindow={parent.props.onSelectWindow}
      title={sketch.title}
      useDarkText={true}
      width={sketch.width}
      height={sketch.height}
      sketch={sketch.sketch}
      initState={sketch.initState}
      getInputs={sketch.getInputs}
    ></P5FileIcon>
  );
}

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

        {_P5IconFromSketch(HSBCircle, this)}
        {_P5IconFromSketch(HSBGrid, this)}

        <PDFFileIcon
          onAddWindow={this.props.onAddWindow}
          onRemoveWindow={this.props.onRemoveWindow}
          onSelectWindow={this.props.onSelectWindow}
          title={"booklet.pdf"}
          useDarkText={true}
        ></PDFFileIcon>
      </FolderFileIcon>
    );
  }
}
