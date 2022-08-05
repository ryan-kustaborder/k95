import React, { Component } from "react";

import _rug from "./rug.jpg";

import FolderFileIcon from "../../k95/fileIcons/FolderFileIcon";
import PhotoFileIcon from "../../k95/fileIcons/PhotoFileIcon";

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
      </FolderFileIcon>
    );
  }
}
