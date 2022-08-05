import React, { Component } from "react";
import file from "../images/icons/file.png";
import Window from "../windows/Window";

export default class FileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: null,
    };

    this.ref = React.createRef();
  }

  onDoubleClick() {
    if (!this.state.window) {
      let window = <Window onCloseWindow={this.onCloseWindow.bind(this)} />;
      this.setState({ window: window });

      this.props.onAddWindow(window);
    }
  }

  onCloseWindow() {
    this.props.onRemoveWindow(this.state.window);

    this.setState({ window: null });
  }

  launchWindow() {
    return;
  }

  getIcon() {
    return file;
  }

  render() {
    let style = this.props.useDarkText ? "DesktopIcon dark" : "DesktopIcon";

    return (
      <>
        <div className={style} onDoubleClick={this.onDoubleClick.bind(this)}>
          <img alt={this.props.alt} src={this.getIcon()}></img>
          <p>{this.props.title}</p>
        </div>
      </>
    );
  }
}
