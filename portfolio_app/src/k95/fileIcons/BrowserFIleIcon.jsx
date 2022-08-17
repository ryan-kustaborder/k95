import FileIcon from "./FileIcon";
import WINDOW_ICON from "../../icons/window.png";

export default class BrowserFileIcon extends FileIcon {
  onDoubleClick() {
    window.open(this.props.url, "_blank");
  }

  getIcon() {
    return WINDOW_ICON;
  }
}
