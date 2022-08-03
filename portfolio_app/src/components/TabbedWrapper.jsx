import React, { Component } from "react";

export default class TabbedWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { active: 0 };
  }

  setActive(newActive) {
    this.setState({ active: newActive });
  }

  render() {
    const tabs = this.props.tabNames.map((tab, i) => {
      return (
        <button
          onClick={() => {
            this.setActive(i);
          }}
        >
          {tab}
        </button>
      );
    });

    return (
      <div className="tabset">
        <div className="tabset-tabs">{tabs}</div>
        <div className="tabset-content out">
          {this.props.content[this.state.active]}
        </div>
      </div>
    );
  }
}
