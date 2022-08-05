import React, { Component } from "react";
import PropTypes from "prop-types";
import p5 from "p5";

export default class P5Wrapper extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  static propTypes = {
    p5Props: PropTypes.object.isRequired,
    onSetAppState: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.ref.current);
    this.canvas.props = this.props.p5Props;
    this.canvas.onSetAppState = this.props.onSetAppState;
  }

  shouldComponentUpdate(nextProps) {
    this.canvas.props = nextProps.p5Props;
    return false;
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return (
      <>
        <div ref={this.ref} className="P5Wrapper" />
      </>
    );
  }
}
