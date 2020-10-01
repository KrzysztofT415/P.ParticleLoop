class Particle {
  constructor(width, height) {
    this.xNoise = new NoiseLoop(0.5, - width, width * 2);
    this.yNoise = new NoiseLoop(0.5, - height, height * 2);
    this.dNoise = new NoiseLoop(7, 10, 120);

    let tag = Math.random();
    if (tag > 0.55) {
      this.rNoise = new NoiseLoop(7, 0, 1);
      this.gNoise = new NoiseLoop(7, 100, 255);
      this.bNoise = new NoiseLoop(7, 100, 255);
    }
    else if (tag > 0.2) {
      this.rNoise = new NoiseLoop(7, 0, 1);
      this.gNoise = new NoiseLoop(7, 30, 100);
      this.bNoise = new NoiseLoop(7, 200, 255);
    }
    else {
      this.rNoise = new NoiseLoop(7, 0, 1);
      this.gNoise = new NoiseLoop(7, 200, 203);
      this.bNoise = new NoiseLoop(7, 30, 200);
    }
  }
}
