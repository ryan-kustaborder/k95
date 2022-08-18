import FileIcon from "./FileIcon";
import WINDOW_ICON from "../../icons/window.png";

export default class LinkFileIcon extends FileIcon {
  onDoubleClick() {
    window.open(this.props.url, "_blank");
  }

  getIcon() {
    if (this.props.icon) {
      return this.props.icon;
    }
    return WINDOW_ICON;
  }
}
