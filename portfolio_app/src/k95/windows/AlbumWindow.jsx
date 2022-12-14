import React from "react";

import Window from "./Window";
import ResizeWrapper from "../wrappers/ResizableWrapper";

import ScrollableWrapper from "../wrappers/ScrollableWrapper";
import BlankContainer from "../wrappers/BlankContainer";

export default class AlbumWindow extends Window {
  componentDidMount() {
    this.setState({ current: 0 });
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

  getInnerContent() {
    let currentImage = this.props.images[this.state.current];

    return (
      <ResizeWrapper onCloseWindow={() => {}}>
        <div className="vertical-layout">
          <ScrollableWrapper>
            <BlankContainer>
              <img src={currentImage} alt={this.props.alt}></img>
            </BlankContainer>
          </ScrollableWrapper>
          <div className="control-set">
            <button className="out" onClick={this.onPrev.bind(this)}>
              {"<"} Prev
            </button>
            <button className="out" onClick={this.onNext.bind(this)}>
              Next {">"}
            </button>
          </div>
        </div>
      </ResizeWrapper>
    );
  }
}
