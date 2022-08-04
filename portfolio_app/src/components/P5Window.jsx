import React, { Component } from "react";
import p5 from "p5";

import Window from "./Window";
import ResizeWrapper from "./ResizableWrapper";

export default class P5Window extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.sketch = (p) => {
      p.setup = () => {
        p.createCanvas(500, 500);

        p.noStroke();
        p.colorMode(p.HSB, 360, p.width, p.height);
        p.radius = 100;
      };

      p.draw = () => {
        p.background(0);
        p.circle(p.mouseX, 100, 100);
      };
    };
  }

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.ref.current);
  }

  render() {
    return (
      <Window
        title={this.props.title}
        onCloseWindow={this.props.onCloseWindow}
        onSelectWindow={this.props.onSelectWindow}
      >
        <ResizeWrapper onCloseWindow={() => {}}>
          <div ref={this.ref} className="blank-container"></div>
        </ResizeWrapper>
      </Window>
    );
  }
}
