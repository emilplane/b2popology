import { SpeedMod } from './speed-mod.js';

export class SpeedModCollection {

  constructor(id, name, speedMods) {
    this.id = id;
    this.name = name;
    this.speedMods = speedMods;
  }

  clone() {
    return new SlowMod(this.id, this.name, this.speedMods.map(slow => slow.clone()));
  }

  static fromData(data) {
    return new SlowMod(data.id, data.name, data.speedMods.map(slow => SpeedMod.fromData(slow)));
  }

}
