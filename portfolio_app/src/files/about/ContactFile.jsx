import React from "react";
import FileIcon from "../../k95/fileIcons/FileIcon";
import ICON from "../../icons/phone.png";
import Window from "../../k95/windows/Window";
import BlankContainer from "../../k95/wrappers/BlankContainer";

import "./about.scss";
import PDFFileIcon from "../../k95/fileIcons/PDFFileIcon";

export default class ContactFile extends FileIcon {
  onDoubleClick() {
    if (!this.state.window) {
      let window = (
        <Window
          title={this.props.title}
          key={"Window - " + this.props.title}
          onCloseWindow={this.onCloseWindow.bind(this)}
          onSelectWindow={this.props.onSelectWindow}
        >
          <BlankContainer>
            <div className="contact">
              <h2>Phone: </h2> <a href="tel:814-571-8183">814-571-8183</a>
              <h2>Email: </h2>
              <a href="mailto: ryan.kustaborder@gmail.com">
                ryan.kustaborder@gmail.com
              </a>
              <h2>Linkedin: </h2>
              <a
                href="https://www.linkedin.com/in/ryan-kustaborder-0822561a0"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ryan-kustaborder-0822561a0
              </a>
              <PDFFileIcon
                onAddWindow={this.props.onAddWindow}
                onRemoveWindow={this.props.onRemoveWindow}
                onSelectWindow={this.props.onSelectWindow}
                title={"resume.pdf"}
                useDarkText={true}
              />
            </div>
          </BlankContainer>
        </Window>
      );
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  getIcon() {
    return ICON;
  }
}
