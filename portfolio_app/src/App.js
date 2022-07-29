import DesktopIcon from "./components/DesktopIcon";
import DraggableWindow from "./components/DraggableWindow";

function App() {
  return (
    <div className="App">
      <DesktopIcon />
      <DesktopIcon />
      <DesktopIcon />
      <DesktopIcon />
      <DesktopIcon />
      <div className="footer">
        <a className="button out">Start</a>
        <a className="button in">11:27 p.m.</a>
      </div>
    </div>
  );
}

export default App;
