registerAnimator(
  "gaussian",
  class {
    // Assign options
    constructor(options) {
      this.duration = options.duration;
      this.distance = options.distance;
    }

    animate(currentTime, effect) {
      // Set up Gaussian function params
      const sigma = this.duration / 10;
      const mi = this.duration / 2;

      // Scope current time to animation duration range
      const x = currentTime % this.duration;

      // Calculate individual parts of Gaussian function
      const e = -0.5 * Math.pow((x - mi) / sigma, 2);
      const f = 1 / (sigma * Math.sqrt(2 * Math.PI));

      // Calculate current value of Guaussian function
      const localTime = this.distance * this.duration * f * Math.exp(e);

      // Assign value to effect local time
      effect.localTime = localTime;
    }
  }
);
