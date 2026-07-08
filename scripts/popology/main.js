import { TowerSelector } from './ui/tower-selector.js';
import { Tower } from '/scripts/popology/classes/tower.js';

const towerViewContainer = document.getElementById('tower-view');
const towerSelectorContainer = document.getElementById('tower-selector-container');

const params = new URLSearchParams(document.location.search);

main();

async function main() {
  const towerId = (params.get("id") != null) ? params.get("id") : "dart-monkey"
  const towerPath = (params.get("path") != null) ? params.get("path") : "000"

  const towerSelector = new TowerSelector(towerViewContainer);
  towerSelectorContainer.append(towerSelector.toHTML());

  const tower = await Tower.loadTower(towerId);
  const towerHTML = await tower.toHTML(towerPath, towerViewContainer);
  towerViewContainer.append(towerHTML);
}

