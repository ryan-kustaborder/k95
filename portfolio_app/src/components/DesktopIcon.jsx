import React, { Component } from "react";
import image from "../images/icons/folder.png";

export default class DesktopIcon extends Component {
  render() {
    return (
      <div className="DesktopIcon">
        <img src={image}></img>
        <p>This Folder Has A Long Name</p>
      </div>
    );
  }
}
