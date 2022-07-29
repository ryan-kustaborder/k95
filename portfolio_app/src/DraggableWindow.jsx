import React, { Component } from "react";

class DraggableWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: { x: 50, y: 50 },
      dragging: false,
      rel: null,
    };

    this.inputRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dragging && !prevState.dragging) {
      document.addEventListener("mousemove", this.onMouseMove.bind(this));
      document.addEventListener("mouseup", this.onMouseUp.bind(this));
    } else if (!this.state.dragging && prevState.dragging) {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    }
  }

  onMouseDown(e) {
    console.log(this.inputRef.current.offsetLeft);
    if (e.button !== 0) return;

    //var computedStyle = window.getComputedStyle(this.getDOMNode());
    var pos = {
      top: parseInt(this.inputRef.current.offsetTop),
      left: parseInt(this.inputRef.current.offsetLeft),
    };

    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top,
      },
    });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseUp(e) {
    this.setState({ dragging: false });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseMove(e) {
    if (!this.state.dragging) return;
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y,
      },
    });

    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    var top = this.state.pos.y;
    var left = this.state.pos.x;

    return (
      <div
        style={{ position: "absolute", top: top + "px", left: left + "px" }}
        className="window out"
        onMouseDown={this.onMouseDown.bind(this)}
        ref={this.inputRef}
      >
        <div className="window-header">
          <p>Window Title</p>
          <a className="button out"></a>
        </div>
        <div className="blank-container in"></div>
      </div>
    );
  }
}

export default DraggableWindow;
