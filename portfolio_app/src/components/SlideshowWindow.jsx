import React, { Component } from "react";

import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

import ScrollableWrapper from "./ScrollableWrapper";

export default class SlideshowWindow extends Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
  }

  onPrev() {
    let i = this.state.current;

    if (i <= 0) {
      i = this.props.images.length - 1;
    } else {
      i--;
    }

    this.setState({ current: i });
  }

  onNext() {
    let i = this.state.current;

    if (i + 1 >= this.props.images.length) {
      i = 0;
    } else {
      i++;
    }

    this.setState({ current: i });
  }

  render() {
    let currentImage = this.props.images[this.state.current];

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
            <div>
              <button className="out" onClick={this.onPrev.bind(this)}>
                {"<"} Prev
              </button>
              <button className="out" onClick={this.onNext.bind(this)}>
                Next {">"}
              </button>
            </div>
          </div>
        </ResizeWrapper>
      </Window>
    );
  }
}
