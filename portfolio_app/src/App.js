import PhotoWindow from "./components/PhotoWindow";
import TextEditorWindow from "./components/TextEditorWindow";
import rug from "./images/gallery/rug.jpg";

function App() {
  return (
    <div className="App">
      <PhotoWindow title="Photo Window">
        <img src={rug}></img>
      </PhotoWindow>

      <div className="footer">
        <a className="button out">Start</a>
        <a className="button in">11:27 p.m.</a>
      </div>
    </div>
  );
}

export default App;
