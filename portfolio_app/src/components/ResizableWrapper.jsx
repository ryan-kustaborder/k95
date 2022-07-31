import React, { Component } from "react";
import resize from "../images/icons/resize.png";

export default class ResizeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width: 500, height: 300 },
      dragging: false,
      rel: null,
    };
    this.ref = React.createRef();
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
    if (e.button !== 0) return;

    var size = {
      top: parseInt(this.ref.current.clientHeight),
      left: parseInt(this.ref.current.clientWidth),
    };

    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - size.left,
        y: e.pageY - size.top,
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
      size: {
        width: e.pageX - this.state.rel.x,
        height: e.pageY - this.state.rel.y,
      },
    });

    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    var height = this.state.size.height;
    var width = this.state.size.width;

    return (
      <div className="resize">
        <div
          style={{ height: height + "px", width: width + "px" }}
          className="resize-content in"
          ref={this.ref}
        >
          {this.props.children}
        </div>
        <div className="resize-control">
          <img
            src={resize}
            aria-hidden="true"
            alt=""
            onMouseDown={this.onMouseDown.bind(this)}
          ></img>
        </div>
      </div>
    );
  }
}