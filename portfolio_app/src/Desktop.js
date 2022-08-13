import React, { Component } from "react";

import FooterTab from "./k95/FooterTab";
import FolderFileIcon from "./k95/fileIcons/FolderFileIcon";
import GalleryFolder from "./files/gallery/GalleryFolder";
import Clock from "./k95/Clock";

export default class Desktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windows: [],
      selected: null,
    };
  }

  selectWindow(window) {
    if (this.state.selected) {
      this.state.selected.setState({ selected: false });
    }
    window.setState({ selected: true });

    this.setState({ selected: window });
  }

  addWindow(window) {
    let newWindows = [];

    for (var oldWindow in this.state.windows) {
      newWindows.push(this.state.windows[oldWindow]);
    }
    newWindows.push(window);
    this.setState({ windows: newWindows });

    return window;
  }

  removeWindow(window) {
    let newWindows = [];

    for (var oldWindow in this.state.windows) {
      if (this.state.windows[oldWindow] !== window)
        newWindows.push(this.state.windows[oldWindow]);
    }

    this.setState({ windows: newWindows });
  }

  render() {
    const tabs = this.state.windows.map((window) => (
      <FooterTab window={window} desktop={this} />
    ));

    return (
      <div className="Desktop">
        <div className="blank-6"></div>

        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"About"}
        />

        <div className="blank-5"></div>

        <GalleryFolder
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Gallery"}
        />

        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Contact"}
        />

        <div className="blank-4"></div>

        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Games"}
        />

        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Settings"}
        />

        <div className="blank-4"></div>

        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Accesibility"}
        />

        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Websites"}
        />

        {this.state.windows}

        <div className="footer">
          <button
            className="button out"
            onClick={() => {
              document.documentElement.style.setProperty(
                "--light-gray",
                "green"
              );
            }}
          >
            <p>Start</p>
          </button>

          <div className="footer-tabs">{tabs}</div>
          <Clock />
        </div>
      </div>
    );
  }
}
