export default function sketch(_p5) {
  _p5.setup = function () {
    _p5.createCanvas(250, 250);
    _p5.background(0);
    _p5.noStroke();
    _p5.colorMode(_p5.HSB, 360, _p5.width, _p5.height);
    _p5.radius = _p5.height / 2 - 50;
    _p5.segmentCount = 24;
  };

  _p5.draw = function () {
    const saturationOverride = _p5.map(
      _p5.props.saturation,
      0,
      255,
      0,
      _p5.width
    );

    _p5.step = 360 / _p5.segmentCount;
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
      let s = saturationOverride != null ? saturationOverride : _p5.mouseX;
      let b = _p5.mouseY;

      _p5.fill(h, s, b);
    }
    _p5.endShape();
  };

  _p5.keyReleased = function (e) {
    switch (e.key) {
      case "1":
        _p5.segmentCount = 360;
        break;
      case "2":
        _p5.segmentCount = 45;
        break;
      case "3":
        _p5.segmentCount = 24;
        break;
      case "4":
        _p5.segmentCount = 12;
        break;
      case "5":
        _p5.segmentCount = 6;
        break;
      default:
        _p5.segmentCount = 24;
    }
  };
}
