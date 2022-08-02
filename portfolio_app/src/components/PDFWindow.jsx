import React, { Component } from "react";

import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";
import img1 from "../images/icons/display.png";
import img2 from "../images/icons/file.png";
import ScrollableWrapper from "./ScrollableWrapper";

export default class PDFWindow extends Component {
  constructor(props) {
    super(props);

    this.state = { current: 1 };
  }

  onClick() {
    this.setState({ current: 0 });
  }

  render() {
    let currentImage;

    if (this.state.current == 0) {
      currentImage = img1;
    } else {
      currentImage = img2;
    }

    return (
      <Window
        title={this.props.title}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper onCloseWindow={() => {}}>
          <div className="vertical-layout">
            <ScrollableWrapper>
              <div className="blank-container">
                <img src={currentImage} alt={this.props.alt}></img>
              </div>
            </ScrollableWrapper>
            <button class="out" onClick={this.onClick.bind(this)}>
              Next {">"}
            </button>
          </div>
        </ResizeWrapper>
      </Window>
    );
  }
}
