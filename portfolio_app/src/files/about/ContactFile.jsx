import React from "react";
import FileIcon from "../../k95/fileIcons/FileIcon";
import Window from "../../k95/windows/Window";
import BlankContainer from "../../k95/wrappers/BlankContainer";

import ICON from "../../icons/phone.png";
import EMAIL_ICON from "../../icons/email.png";
import LINKEDIN_ICON from "../../icons/linkedin.png";

import "./about.scss";
import PDFFileIcon from "../../k95/fileIcons/PDFFileIcon";
import LinkFileIcon from "../../k95/fileIcons/LinkFileIcon";

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
              <LinkFileIcon
                onAddWindow={this.props.onAddWindow}
                onRemoveWindow={this.props.onRemoveWindow}
                onSelectWindow={this.props.onSelectWindow}
                title={"Email"}
                useDarkText={true}
                icon={EMAIL_ICON}
                url="mailto: ryan.kustaborder@gmail.com"
              />

              <LinkFileIcon
                onAddWindow={this.props.onAddWindow}
                onRemoveWindow={this.props.onRemoveWindow}
                onSelectWindow={this.props.onSelectWindow}
                title={"LinkedIn"}
                useDarkText={true}
                icon={LINKEDIN_ICON}
                url="https://www.linkedin.com/in/ryan-kustaborder"
              />

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
