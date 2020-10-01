class NoiseLoop {
  constructor(diameter, min, max) {
    this.diameter = diameter;
    this.min = min;
    this.max = max;
    this.cx = getRandomInt(0, 1000);
    this.cy = getRandomInt(0, 1000);
    this.fi = Math.random() * Math.PI * 2;
  }

  value(a, perlin) {
    let xoff = map(Math.cos(a + this.fi), -1, 1, this.cx, this.cx + this.diameter);
    let yoff = map(Math.sin(a + this.fi), -1, 1, this.cy, this.cy + this.diameter);
    let r = (perlin.get(xoff, yoff) + 1) / 2;
    return map(r, 0, 1, this.min, this.max);
  }
}

function getRandomInt(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a)) + a;
}

function map(v, x, y, a, b) {
  return ((b - a) * (v - x) / (y - x)) + a;
}