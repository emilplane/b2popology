export class SpeedMod {

  constructor(target, duration, value) {
    this.target = target;
    this.duration = duration;
    this.value = value;
  }

  clone() {
    return new SpeedMod(this.target, this.duration, this.value);
  }

  static fromData(data) {
    return new SpeedMod(data.target, data.duration, data.value);
  }

}
