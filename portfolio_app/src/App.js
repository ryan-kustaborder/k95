import React, { Component } from "react";
import p5 from "p5";

import FileManagerFileIcon from "./components/FileManagerFileIcon";
import FooterTab from "./components/FooterTab";
import SlideshowFileIcon from "./components/SlideshowFileIcon";
import PhotoFileIcon from "./components/PhotoFileIcon";
import rug from "./images/gallery/rug.jpg";
import img1 from "./images/icons/display.png";
import img2 from "./images/icons/file.png";
import ArticleFileIcon from "./components/ArticleFileIcon";

export default class App_ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windows: [],
      selected: null,
    };

    this.testRef = React.createRef();

    this.Sketch = (p) => {
      p.setup = () => {
        p.createCanvas(500, 500);

        p.noStroke();
        p.colorMode(p.HSB, 360, p.width, p.height);
        p.radius = 100;
      };

      p.draw = () => {
        p.circle(p.mouseX, 100, 100);
      };
    };
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.testRef.current);
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
}
