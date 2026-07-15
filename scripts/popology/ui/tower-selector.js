import { Tower } from '../classes/tower.js';

export class TowerSelector {

  constructor(towerViewContainer) {
    this.towerViewContainer = towerViewContainer;
    this.towerIds = [
      'dart-monkey',
      'tack-shooter',
      'boomerang-monkey',
      'bomb-shooter'
    ];
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    this.towerIds.forEach((id) => {
      const button = document.createElement('button');
      const img = document.createElement('img');
      button.append(img);

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
      rootContainer.append(button);
    });

    return rootContainer;
  }

}
