import React, { Component } from "react";

import FooterTab from "./k95/FooterTab";
import FolderFileIcon from "./k95/fileIcons/FolderFileIcon";
import GalleryFolder from "./files/gallery/GalleryFolder";

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
      <FooterTab title={window.props.title} />
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
            Start
          </button>
          {tabs}
          <button className="button in">11:27 p.m.</button>
        </div>
      </div>
    );
  }

  getInputs(win) {
    win.onSliderChange = (event) =>
      win.setState({ saturation: +event.target.value });

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
