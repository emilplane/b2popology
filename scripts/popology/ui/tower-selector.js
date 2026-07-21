import { Tower } from '../classes/tower.js';

export class TowerSelector {

  constructor(towerViewContainer) {
    this.towerViewContainer = towerViewContainer;
    this.towerInfo = [
      { id: "dart-monkey", category: "primary" },
      { id: "boomerang-monkey", category: "primary" },
      { id: "bomb-shooter", category: "primary" },
      { id: "tack-shooter", category: "primary" },
      { id: "ice-monkey", category: "primary" },
      { id: "glue-gunner", category: "primary" },
      { id: "sniper-monkey", category: "military" },
      { id: "monkey-sub", category: "military" },
      { id: "monkey-buccaneer", category: "military" },
      { id: "monkey-ace", category: "military" },
      { id: "heli-pilot", category: "military" },
      { id: "mortar-monkey", category: "military" },
      { id: "dartling-gunner", category: "military" },
      { id: "wizard-monkey", category: "magic" },
      { id: "super-monkey", category: "magic" },
      { id: "ninja-monkey", category: "magic" },
      { id: "alchemist", category: "magic" },
      { id: "druid", category: "magic" },
      { id: "monkey-village", category: "support" },
      { id: "banana-farm", category: "support" },
      { id: "spike-factory", category: "support" },
      { id: "engineer-monkey", category: "support" }
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

    this.towerInfo.forEach((info) => {
      const button = document.createElement('button');
      const img = document.createElement('img');
      button.append(img);
      button.classList.add('tower-selector-button', `category-button-${info.category}`);
      button.addEventListener('click', async () => {
        const tower = await Tower.loadTower(info.id);
        const towerHTML = await tower.toHTML('000', this.towerViewContainer);
        this.towerViewContainer.replaceChildren(towerHTML);
        const state = { "id" : info.id }
        history.replaceState(
          state,
          "",
          `/pages/popology.html?id=${encodeURIComponent(state.id)}`
        );
      });
      img.src = '/media/tower-portraits/' + info.id + '/000.png';
      img.classList.add('tower-selector-image');
      buttonContainer.append(button);
    });

    return rootContainer;
  }

}
