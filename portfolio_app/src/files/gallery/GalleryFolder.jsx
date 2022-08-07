import React, { Component } from "react";

import _rug from "./rug.jpg";

import FolderFileIcon from "../../k95/fileIcons/FolderFileIcon";
import PhotoFileIcon from "../../k95/fileIcons/PhotoFileIcon";
import P5FileIcon from "../../k95/fileIcons/P5FileIcon";
import HSBCircle from "../../sketches/HSBCircle";
import HSBGrid from "../../sketches/HSBGrid";

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
          title={HSBCircle.title}
          useDarkText={true}
          width={HSBCircle.width}
          height={HSBCircle.height}
          sketch={HSBCircle.sketch}
          initState={HSBCircle.initState}
          getInputs={HSBCircle.getInputs}
        ></P5FileIcon>
        <P5FileIcon
          onAddWindow={this.props.onAddWindow}
          onRemoveWindow={this.props.onRemoveWindow}
          onSelectWindow={this.props.onSelectWindow}
          title={HSBGrid.title}
          useDarkText={true}
          width={HSBGrid.width}
          height={HSBGrid.height}
          sketch={HSBGrid.sketch}
          initState={HSBGrid.initState}
          getInputs={HSBGrid.getInputs}
        ></P5FileIcon>
      </FolderFileIcon>
    );
  }
}
