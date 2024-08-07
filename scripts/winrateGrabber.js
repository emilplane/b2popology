let start = new Date()

let players = [];

let allDataCaptured = {
    "leaderboards": [],
    "profiles": []
}

main()

async function main() {
    await addPlayersFromLeaderboard("https://data.ninjakiwi.com/battles2/homs/season_15/leaderboard?page=1")
    await addPlayersFromLeaderboard("https://data.ninjakiwi.com/battles2/homs/season_14/leaderboard?page=1")
    await addPlayersFromLeaderboard("https://data.ninjakiwi.com/battles2/homs/season_13/leaderboard?page=1")
    await addPlayersFromLeaderboard("https://data.ninjakiwi.com/battles2/homs/season_12/leaderboard?page=1")
    let result = {
        timeStarted: start,
        timeFinished: new Date,
        players,
        allDataCaptured
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "season16Winrates.json");
    dlAnchorElem.click();
}

async function addPlayersFromLeaderboard(url) {
    data = await getData(url, "leaderboards")
    console.log(data)
    let playerList = data.body
    for (let playerIndex in playerList) {
        let playerAlreadyTracked = false
        for (let existingPlayerIndex in players) {
            if (players[existingPlayerIndex].url == playerList[playerIndex].profile) {
                playerAlreadyTracked = true
            }
        }
        if (!playerAlreadyTracked) {
            let playerProfile = await getData(playerList[playerIndex].profile, "profiles")
            players.push({
                "url": playerList[playerIndex].profile,
                "displayName": playerProfile.body.displayName,
                "playerStats": {
                    "rankedStats": playerProfile.body.rankedStats,
                    "casualStats": playerProfile.body.casualStats,
                    "bloonStats": playerProfile.body._bloonStats,
                    "towers": playerProfile.body._towers
                }
            })
        }
    }
    if (data.next != null) {
        console.log(data.next)
        await addPlayersFromLeaderboard(data.next)
    }
}

async function getData(url, type) {
    let status = null
    let response
    while (status != 200) {
        if (status != null) {
            console.log(`Status ${status}: trying again in 1s`)
            await sleep(1000)
        }
        try {
            response = await fetch(url);
            console.log(response.status)
            status = response.status
        } catch {
            console.log(403)
            status = 403
        }
    }
    console.log("j")
    const data = await response.json();
    (allDataCaptured[type]).push(data)
    return data
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}