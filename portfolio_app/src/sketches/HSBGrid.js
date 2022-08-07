import Slider from "../k95/inputs/Slider";

const title = "HSB_Grid.p5";
const size = { width: 400, height: 400 };

const initState = {
  step: 20,
};

function getInputs(win) {
  // Delete this if no input controls needed
  win.onStepChange = (event) => win.setState({ step: +event.target.value });

  return (
    <div className="Input-Container">
      <p>Controls</p>

      <div>
        <Slider
          label={"Step:"}
          bounds={{ min: 2, max: 60, step: 2 }}
          value={win.state.step}
          onChange={win.onStepChange}
        />
      </div>
    </div>
  );
}

function sketch(_p5) {
  _p5.setup = function () {
    _p5.createCanvas(size.width, size.height);
    _p5.background(0);
    _p5.noStroke();
  };

  _p5.draw = function () {
    // Draws every frame
    _p5.colorMode(_p5.HSB, _p5.width, _p5.height, 100);

    for (let x = 0; x < _p5.width; x += _p5.props.step) {
      for (let y = 0; y < _p5.width; y += _p5.props.step) {
        _p5.fill(x, _p5.height - y, 100);
        _p5.rect(x, y, _p5.props.step, _p5.props.step);
      }
    }
  };
}

// Rename const to sketch name
const _template = {
  sketch: sketch,
  title: title,
  size: size,
  initState: initState,
  getInputs: getInputs,
};

export default _template;
