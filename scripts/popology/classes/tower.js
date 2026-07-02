import { Upgrade } from './upgrade.js';
import { PropertiesManager } from './properties/properties-manager.js';
import { PathSelector } from '/scripts/popology/ui/path-selector.js';

export class Tower {

  constructor(id, name, properties, upgrades) {
    this.id = id;
    this.name = name;
    this.properties = properties;
    this.upgrades = upgrades;
  }

  static fromData(data) {
    if (!data.properties || !data.upgrades) {
      console.error('Properties or upgrades are invalid');
      return;
    }

    const properties = PropertiesManager.propertiesFromData(data.properties);
    const upgrades = data.upgrades.map(Upgrade.fromData);

    return new Tower(data.id, data.name, properties, upgrades);
  }

  async toHTML(path, parent) {
    if (!path) path = '000';

    const properties = Array.from(this.properties)
    const attacks = this.getAttacks(path);
    const abilities = this.getAbilities(path);
    const subtowers = this.getSubtowers(path);
    const totalCost = this.getTotalCost(path);

    const rootContainer = document.createElement('div');
    const towerContainer = document.createElement('div');
    const pathSelector = new PathSelector(this, path);
    const pathSelectorHTML = await pathSelector.toHTML(parent);
    const towerName = document.createElement('h1');
    const upgradeName = document.createElement('h2');
    const towerImageContainer = document.createElement('div');
    const towerImage = document.createElement('img');
    const towerPropertiesContainer = document.createElement('div');

    rootContainer.append(towerContainer);
    towerContainer.append(pathSelectorHTML, towerName, upgradeName, towerImageContainer, towerPropertiesContainer);
    towerImageContainer.append(towerImage);

    towerContainer.className = 'tower-container';
    towerImageContainer.className = 'tower-image-container';
    towerPropertiesContainer.className = 'properties-container';

    towerName.textContent = this.formattedName(path)
    upgradeName.textContent = this.getUpgrade(path).name;
    towerImage.src = this.getImagePath(path);

    if (totalCost) properties.push(PropertiesManager.createProperty('cost', totalCost));

    properties.forEach((property) => {
      towerPropertiesContainer.append(property.toHTML());
    });

    if ((attacks != null) && (attacks.length > 0)) {
      const attacksHeader = document.createElement('h3');
      const attacksContainer = document.createElement('div');

      towerContainer.append(attacksHeader, attacksContainer);

      attacksHeader.textContent = 'Attacks';

      attacks.forEach((attack) => {
        attacksContainer.append(attack.toHTML());
      });
    }

    if ((abilities != null) && (abilities.length > 0)) {
      const abilitiesHeader = document.createElement('h3');
      const abilitiesContainer = document.createElement('div');

      towerContainer.append(abilitiesHeader, abilitiesContainer);

      abilitiesHeader.textContent = 'Abilities';

      abilities.forEach((ability) => {
          abilitiesContainer.append(ability.toHTML());
        });
      }

    if ((subtowers != null) && (subtowers.length > 0)) {
      for (const subtowerId of subtowers) {
        const subParentContainer = document.createElement('div');

        const subtower = await Tower.loadTower(subtowerId);
        const subtowerHTML = await subtower.toHTML('000', subParentContainer);

        subParentContainer.append(subtowerHTML);
        rootContainer.append(subParentContainer);
      }
    }

    return rootContainer;
  }

  static async loadTower(id) {

    async function loadData(dataPath) {
      try {
        const response = await fetch(dataPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          return data;
      } catch (error) {
        console.error('Failed to load JSON:', error);
      }
    }

    function toFileName(id) {
      return id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    const dataPath = '/data/towers/' + toFileName(id) + '.json';
    const data = await loadData(dataPath);
    return Tower.fromData(data);
  }

  getImagePath(path) {

    function toFileName(id) {
      return id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    const upgrade = this.getUpgrade(path)
    if (upgrade != null && upgrade.metadata != null && upgrade.metadata.portraitSource != null) return upgrade.metadata.portraitSource;
    return "/media/tower-portraits/" + toFileName(this.id) + "/" + upgrade.path + ".png";
  }

  getDominantPath(path) {
    const pathNums = [...path].map(Number);
    if (Math.max(...pathNums) == pathNums[0]) return pathNums[0] + '00';
    if (Math.max(...pathNums) == pathNums[1]) return '0' + pathNums[1] + '0';
    return '00' + pathNums[2];
  }

  getUpgrade(path) {
    const domPath = this.getDominantPath(path);
    return this.upgrades.find(upgrade => upgrade.path == domPath);
  }

  getAttacks(path) {
    const attacks = [];
    this.upgrades.forEach((upgrade) => {
      if (this.isChildUpgrade(path, upgrade.path) && upgrade.attacks) {
        upgrade.attacks.forEach((attack) => { attacks.push(attack); });
      }
    });

    const filteredAttacks = [];
    let flag;
    for (let i = 0; i < attacks.length; i++) {
      flag = true;
      for (let j = i + 1; j < attacks.length; j++) {
        if (attacks[j].overwrites == null) continue;
        if (attacks[j].overwrites.includes(attacks[i].id)) {
          flag = false;
          break;
        }
      }
      if (flag) filteredAttacks.push(attacks[i]);
    }

    const buffedAttacks = [];
    const buffs = this.getBuffs(path);
    for (let i = 0; i < filteredAttacks.length; i++) {
      let currentAttack = filteredAttacks[i]
      for (let j = 0; j < buffs.length; j++) {
        currentAttack = currentAttack.buffedBy(buffs[j]);
      }
    buffedAttacks.push(currentAttack);
    }

    return buffedAttacks;
  }

  getBuffs(path) {
    const buffs = [];
    const domPath = this.getDominantPath(path);
    this.upgrades.forEach((upgrade) => {
      if (this.isChildUpgrade(path, upgrade.path) && upgrade.buffs) {
        upgrade.buffs.forEach((buff) => {
          if (buff.affectedPaths != null && buff.affectedPaths.includes('EX_' + domPath)) return;
          if (buff.affectedPaths == null || buff.affectedPaths.includes(domPath) || buff.affectedPaths.includes('all')) buffs.push(buff);
        });
      }
    });

    return buffs;
  }

  getAbilities(path) {
    const abilities = [];
    this.upgrades.forEach((upgrade) => {
      if (this.isChildUpgrade(path, upgrade.path) && upgrade.abilities) {
        upgrade.abilities.forEach((ability) => {
          abilities.push(ability);
        });
      }
    });

    const filteredAbilities = [];
    let flag;
    for (let i = 0; i < abilities.length; i++) {
      flag = true;
      for (let j = i + 1; j < abilities.length; j++) {
        if (abilities[j].overwrites == null) continue;
          if (abilities[j].overwrites.includes(abilities[i].id)) {
            flag = false;
            break;
          }
        }
        if (flag) filteredAbilities.push(abilities[i]);
      }

    return filteredAbilities;
  }

  getSubtowers(path) {
    const overwrites = [];
    this.upgrades.forEach((upgrade) => {
      if (this.isChildUpgrade(path, upgrade.path) && upgrade.subtowers) {
        upgrade.subtowers.forEach((subtower) => {
          if (subtower.slice(0, 3) == 'EX_') overwrites.push(subtower.slice(3));
        });
      }
    });

    const subtowers = [];
    this.upgrades.forEach((upgrade) => {
      if (this.isChildUpgrade(path, upgrade.path) && upgrade.subtowers) {
        upgrade.subtowers.forEach((subtower) => {
          if (!overwrites.includes(subtower) && subtower.slice(0, 3) != 'EX_') subtowers.push(subtower);
        });
      }
    });

    return subtowers
  }

  getTotalCost(path) {
    let totalCost = 0;
    this.upgrades.forEach((upgrade) => {
      if (this.isChildUpgrade(path, upgrade.path)) totalCost += upgrade.cost;
    });

    return totalCost;
  }

  formattedName(path) {
    return this.name + ' (' + path[0] + '-' + path[1] + '-' + path[2] + ')';
  }

  isChildUpgrade(path, upgrade) {
    const pathNums = [...path].map(Number);
    const upgradeNums = [...upgrade].map(Number);
    for (let i = 0; i < pathNums.length; i++) {
      if (upgradeNums[i] > pathNums[i]) return false;
    }
    return true;
  }

}


