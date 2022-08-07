const title = "HSB_Circle.p5";
const size = { width: 400, height: 400 };

const initState = {
  // All variables controlled from outside the sketch must go here
};

function getInputs(win) {
  // Delete this if no input controls needed
  return <div className="Input-Container"></div>;
}

function sketch(_p5) {
  _p5.setup = function () {
    _p5.createCanvas(size.width, size.height);
    _p5.background(0);

    // Initialize skecth variables here
  };

  _p5.draw = function () {
    // Draws every frame
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
