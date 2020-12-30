export class NoiseLoop {
  constructor(diameter, min, max) {
    this.diameter = diameter
    this.min = min
    this.max = max
    this.cx = Math.floor(Math.random() * 1000)
    this.cy = Math.floor(Math.random() * 1000)
    this.fi = Math.random() * Math.PI * 2
  }

  value(a, perlin) {
    let x_off = this.map(Math.cos(a + this.fi), -1, 1, this.cx, this.cx + this.diameter)
    let y_off = this.map(Math.sin(a + this.fi), -1, 1, this.cy, this.cy + this.diameter)
    let r = (perlin.get(x_off, y_off) + 1) / 2
    return this.map(r, 0, 1, this.min, this.max)
  }

  map(v, x, y, a, b) {
    return ((b - a) * (v - x) / (y - x)) + a
  }
}