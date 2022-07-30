import React, { Component } from "react";
import CLOSE_ICON from "../images/icons/x.png";

export default class DraggableWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: { x: 50, y: 50 },
      dragging: false,
      rel: null,
      render: this.props.active,
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

    var pos = {
      top: parseInt(this.ref.current.offsetTop),
      left: parseInt(this.ref.current.offsetLeft),
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

  hide(e) {
    this.setState({
      render: false,
    });
    this.props.onCloseWindow();
  }

  render() {
    if (!this.state.render) {
      return null;
    }

    var top = this.state.pos.y;
    var left = this.state.pos.x;

    return (
      <div
        style={{ position: "absolute", top: top + "px", left: left + "px" }}
        className="window out"
        ref={this.ref}
      >
        <div
          className="window-header"
          onMouseDown={this.onMouseDown.bind(this)}
        >
          <p>Window Title</p>
          <button className="button out" onClick={this.hide.bind(this)}>
            <img className="Icon" src={CLOSE_ICON}></img>
          </button>
        </div>
        {this.props.children}
      </div>
    );
  }
}
