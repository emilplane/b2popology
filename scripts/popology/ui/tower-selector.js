import { Tower } from '../classes/tower.js';

export class TowerSelector {

  constructor(towerViewContainer) {
    this.towerViewContainer = towerViewContainer;
    this.towerIds = [
      'dart-monkey',
      'boomerang-monkey',
      'bomb-shooter',
      'tack-shooter',
      'ice-monkey',
      'glue-gunner',
      'sniper-monkey',
      'monkey-sub',
      'monkey-buccaneer',
      'monkey-ace',
      'heli-pilot',
      "mortar-monkey",
      "dartling-gunner",
      "wizard-monkey",
      "super-monkey",
      "ninja-monkey",
      "alchemist",
      "druid",
      "monkey-village",
      'banana-farm',
      "spike-factory",
      "engineer-monkey"
    ];
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    const arrowLeft = document.createElement('img');
    const buttonContainer = document.createElement('div');
    const arrowRight = document.createElement('img');

    rootContainer.append(arrowLeft, buttonContainer, arrowRight);

    rootContainer.classList.add('tower-selector-container');
    buttonContainer.classList.add('tower-selector-button-container');
    arrowLeft.src = '/media/icons/arrow-left.png';
    arrowLeft.classList.add('tower-selector-arrow');
    arrowRight.src = '/media/icons/arrow-right.png';
    arrowRight.classList.add('tower-selector-arrow');

    this.towerIds.forEach((id) => {
      const button = document.createElement('button');
      const img = document.createElement('img');
      button.append(img);
      button.classList.add('tower-selector-button');
      button.addEventListener('click', async () => {
        const tower = await Tower.loadTower(id);
        const towerHTML = await tower.toHTML('000', this.towerViewContainer);
        this.towerViewContainer.replaceChildren(towerHTML);
        history.replaceState(
          { id },
          "",
          `/pages/popology.html?id=${encodeURIComponent(id)}`
        );
      });
      img.src = '/media/tower-portraits/' + id + '/000.png';
      img.classList.add('tower-selector-image');
      buttonContainer.append(button);
    });

    return rootContainer;
  }

}
