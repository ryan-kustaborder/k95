import Slider from "../k95/inputs/Slider";

const title = "HSB_Circle.p5";
const size = { width: 400, height: 400 };

const initState = {
  saturation: 255,
  brightness: 255,
  segments: 24,
};

function getInputs(win) {
  win.onSaturationChange = (event) =>
    win.setState({ saturation: +event.target.value });

  win.onBrightnessChange = (event) =>
    win.setState({ brightness: +event.target.value });

  win.onSegmentsChange = (event) =>
    win.setState({ segments: +event.target.value });

  return (
    <div className="Input-Container">
      <p>Controls</p>

      <div>
        <Slider
          label={"Saturation:"}
          bounds={{ min: 0, max: 255, step: 1 }}
          value={win.state.saturation}
          onChange={win.onSaturationChange}
        />
        <Slider
          label={"Brightness:"}
          bounds={{ min: 0, max: 255, step: 1 }}
          value={win.state.brightness}
          onChange={win.onBrightnessChange}
        />
        <Slider
          label={"Segments:"}
          bounds={{ min: 6, max: 60, step: 6 }}
          value={win.state.segments}
          onChange={win.onSegmentsChange}
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
    _p5.colorMode(_p5.HSB, 360, _p5.width, _p5.height);
    _p5.radius = _p5.height / 2 - 50;
  };

  _p5.draw = function () {
    const saturation = _p5.map(_p5.props.saturation, 0, 255, 0, _p5.width);
    const brightness = _p5.map(_p5.props.brightness, 0, 255, 0, _p5.width);

    _p5.step = 360 / _p5.props.segments;

    _p5.background(0);
    _p5.noStroke();
    // Begins a triangle fan
    _p5.beginShape(_p5.TRIANGLE_FAN);
    // Set the center as the initial vertex
    _p5.vertex(_p5.width / 2, _p5.height / 2);
    for (var angle = 0; angle <= 360 + _p5.step; angle += _p5.step) {
      // Calculate the point on the circle given the angle
      var vx = _p5.width / 2 + Math.cos(angle * (Math.PI / 180)) * _p5.radius;
      var vy = _p5.height / 2 + Math.sin(angle * (Math.PI / 180)) * _p5.radius;
      // Add that point to the triangle fan
      _p5.vertex(vx, vy);

      let h = angle;
      let s = saturation;
      let b = brightness;

      _p5.fill(h, s, b);
    }
    _p5.endShape();
  };
}

const HSBCircle = {
  sketch: sketch,
  title: title,
  size: size,
  initState: initState,
  getInputs: getInputs,
};

export default HSBCircle;
