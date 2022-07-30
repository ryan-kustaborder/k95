import FileIcon from "./components/FileIcon";
import FileManagerFileIcon from "./components/FileManagerFileIcon";
import PhotoFileIcon from "./components/PhotoFileIcon";
import PhotoWindow from "./components/PhotoWindow";
import TextEditorWindow from "./components/TextEditorWindow";
import rug from "./images/gallery/rug.jpg";

function App() {
  return (
    <div className="App">
      <FileManagerFileIcon active={false} icon="FILE" image={rug}>
        <PhotoFileIcon
          active={false}
          icon="FILE"
          useDarkText={true}
          image={rug}
        />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
        <PhotoFileIcon active={false} icon="FILE" image={rug} />
      </FileManagerFileIcon>

      <div className="footer">
        <a className="button out">Start</a>
        <a className="button in">11:27 p.m.</a>
      </div>
    </div>
  );
}

export default App;
