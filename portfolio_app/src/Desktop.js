import React, { Component } from "react";

import rug from "./files/gallery/rug.jpg";
import sketch from "./sketches/sketch";

import FooterTab from "./k95/FooterTab";
import PhotoFileIcon from "./k95/fileIcons/PhotoFileIcon";
import AlbumFileIcon from "./k95/fileIcons/AlbumFileIcon";
import FolderFileIcon from "./k95/fileIcons/FolderFileIcon";
import P5FileIcon from "./k95/fileIcons/P5FileIcon";

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
        <FolderFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"File Manager"}
        >
          <PhotoFileIcon
            onAddWindow={this.addWindow.bind(this)}
            onRemoveWindow={this.removeWindow.bind(this)}
            onSelectWindow={this.selectWindow.bind(this)}
            image={rug}
            title={"Photo"}
          />
          <AlbumFileIcon
            onAddWindow={this.addWindow.bind(this)}
            onRemoveWindow={this.removeWindow.bind(this)}
            onSelectWindow={this.selectWindow.bind(this)}
            images={[rug, "", rug]}
            title={"Photo Album"}
          />
        </FolderFileIcon>

        <P5FileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"P5.JS"}
          getInputs={this.getInputs}
          sketch={sketch}
          initState={{ saturation: 100 }}
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
