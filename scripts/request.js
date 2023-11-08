export async function request(url) {
    try {
        const requestURL = `https://raw.githubusercontent.com/emilplane/b2popology/newpopology/json/Towers/${towerDirectory[towerCategory].data[tower].name}.json`;
        const request = new Request(requestURL);
        
        const response = await fetch(request)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let string = await response.json();
        towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = string
    } catch (error) {
        if(logErrors==true){console.log(`Data failed to load!\n\nTower: ${towerDirectory[towerCategory].data[tower].displayName}\n${error}`)}
        towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = {"data": false, "reason": "data could not be fetched"}
    }
}