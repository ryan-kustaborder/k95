import React, { Component } from "react";

import FileManagerFileIcon from "./components/FileManagerFileIcon";
import FooterTab from "./components/FooterTab";
import SlideshowFileIcon from "./components/SlideshowFileIcon";
import PhotoFileIcon from "./components/PhotoFileIcon";
import rug from "./images/gallery/rug.jpg";
import img1 from "./images/icons/display.png";
import img2 from "./images/icons/file.png";
import ArticleFileIcon from "./components/ArticleFileIcon";
import P5FileIcon from "./components/P5FileIcon";
import sketch from "./sketches/sketch";

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
        <div ref={this.testRef}></div>
        <P5FileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          useDarkText={true}
          title={"sketch"}
          //
          initState={{ saturation: 100 }}
          getInputs={this.getInputs}
          sketch={sketch}
        />
        <FileManagerFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Gallery"}
        >
          <PhotoFileIcon
            onAddWindow={this.addWindow.bind(this)}
            onRemoveWindow={this.removeWindow.bind(this)}
            onSelectWindow={this.selectWindow.bind(this)}
            image={rug}
            useDarkText={true}
            title={"rug.png"}
          />

          <SlideshowFileIcon
            onAddWindow={this.addWindow.bind(this)}
            onRemoveWindow={this.removeWindow.bind(this)}
            onSelectWindow={this.selectWindow.bind(this)}
            images={[img1, img2, rug]}
            useDarkText={true}
            title={".pdf"}
          />
        </FileManagerFileIcon>

        <ArticleFileIcon
          onAddWindow={this.addWindow.bind(this)}
          onRemoveWindow={this.removeWindow.bind(this)}
          onSelectWindow={this.selectWindow.bind(this)}
          title={"Article"}
        ></ArticleFileIcon>

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

    console.log(win.state.saturation);

    return (
      <input
        type="range"
        min={0}
        max={255}
        step={1}
        value={win.state.saturation}
        onChange={win.onSliderChange}
      />
    );
  }
}
