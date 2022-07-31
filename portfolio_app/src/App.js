import React, { Component } from "react";

import FileManagerFileIcon from "./components/FileManagerFileIcon";
import FooterTab from "./components/FooterTab";
import PhotoFileIcon from "./components/PhotoFileIcon";
import rug from "./images/gallery/rug.jpg";

export default class App_ extends Component {
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
      <div className="App">
        <FileManagerFileIcon
          icon="FILE"
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
        >
          <PhotoFileIcon
            onAddWindow={this.addWindow.bind(this)}
            onRemoveWindow={this.removeWindow.bind(this)}
            onSelectWindow={this.selectWindow.bind(this)}
            image={rug}
            useDarkText={true}
          />
        </FileManagerFileIcon>

        {this.state.windows}

        <div className="footer">
          <button className="button out">Start</button>
          {tabs}
          <button className="button in">11:27 p.m.</button>
        </div>
      </div>
    );
  }
}
