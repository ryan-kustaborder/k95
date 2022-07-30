import DesktopIcon from "./components/DesktopIcon";
import DraggableWindow from "./components/DraggableWindow";
import ResizableDraggableWindow from "./components/ResizableDraggableWindow";

function App() {
  return (
    <div className="App">
      <ResizableDraggableWindow active={true} onCloseWindow={() => {}}>
        <div className="blank-container"></div>
      </ResizableDraggableWindow>

      <div className="footer">
        <a className="button out">Start</a>
        <a className="button in">11:27 p.m.</a>
      </div>
    </div>
  );
}

export default App;
