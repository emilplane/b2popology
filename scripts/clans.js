const menuIcon = document.getElementById('menuIcon');
const menuDialog = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
    menuDialog.showModal(); 
});

const menuCloseButton = document.getElementById('menuCloseButton');

menuCloseButton.addEventListener('click', function() {
    // Close the dialog
    menuDialog.close(); 
});

async function getData(url, log) {
    const response = await fetch(url);
    const data = await response.json();
    if (log) {console.log(data)}
    return data
}

let teamURL = "https://data.ninjakiwi.com/battles2/guild/9fba12d9d792fba01a13de430a71e421c45215b99d178a3d"

let teamData;
let apiData;
let apiWarsData;

main()

async function main() {
    teamData = await getData("https://raw.githubusercontent.com/emilplane/b2popology/main/json/clanRoster.json", true)
    apiData = await getData("https://data.ninjakiwi.com/battles2/guild/9fba12d9d792fba01a13de430a71e421c45215b99d178a3d", true)
    apiWarsData = await getData(apiData.body.wars, true)
    warsHTML()
    document.querySelector(".closeButton").addEventListener("click", () => {
        document.getElementById("playerDataWindow").close()
    });
}

function warsHTML() {
    for (let warIndex in teamData.wars) {
        console.log(teamData.wars[warIndex])
        document.getElementById("clanWarsContainer").insertAdjacentHTML("afterbegin", `
            <section class="roundedBoxSection warCoverImage">
                <h2 class="luckiestGuy">Clan War ${Number(warIndex)+1}</h2>
                <div class="horizontalLine"></div>
                <div class="warSummaryContainer">
                    <div class="warSummaryContent">
                        <h5>War Leaderboard</h5>
                        <div class="summaryLeaderboard" id="warLeaderboard${warIndex}">
                            
                        </div>
                    </div>
                    <div class="warSummaryContent">
                        <h5>Clan Member Leaderboard</h5>
                        <div class="summaryLeaderboard" id="playerLeaderboard${warIndex}">
                            
                        </div>
                    </div>
                </div>
            </section>
        `)

        let warLeaderboard = apiWarsData.body[apiWarsData.body.length-warIndex-1].groupGuildLeaderboard;
        if (warLeaderboard.length == 0) {
            let dataExists = false; let data;
            for (let i in teamData.storedJSONs) {
                
            }
            if (dataExists) {
                if (teamIndex<12) {
                    let highlightedString = "";
                    if (warLeaderboard[teamIndex].url == teamURL) {
                        highlightedString = " highlightedRow";
                    }
                    document.getElementById(`warLeaderboard${warIndex}`).insertAdjacentHTML("beforeend", `
                        <div class="leaderboardRow${highlightedString}">
                            <h5 class="luckiestGuy">${Number(teamIndex)+1}</h5>
                            <h5 id="war${warIndex}clan${teamIndex}">Team ${Number(teamIndex)+1}</h5>
                            <h5 class="right">${warLeaderboard[teamIndex].score.toLocaleString() }</h5>
                        </div>
                    `)
                }
                putName(warLeaderboard[teamIndex].url, warIndex, "clan", teamIndex)
            } else {
                document.getElementById(`warLeaderboard${warIndex}`).insertAdjacentHTML("beforeend", `
                    <div class="noDataRow">
                        <h5>No data was found.</h5>
                    </div>
                `)
            }
        } else {
            for (let teamIndex in warLeaderboard) {if(teamIndex<12){
                let highlightedString = "";
                if (warLeaderboard[teamIndex].url == teamURL) {
                    highlightedString = " highlightedRow";
                }
                document.getElementById(`warLeaderboard${warIndex}`).insertAdjacentHTML("beforeend", `
                    <div class="leaderboardRow${highlightedString}">
                        <h5 class="luckiestGuy">${Number(teamIndex)+1}</h5>
                        <h5 id="war${warIndex}clan${teamIndex}">Team ${Number(teamIndex)+1}</h5>
                        <h5 class="right">${warLeaderboard[teamIndex].score.toLocaleString() }</h5>
                    </div>
                `)}
                putName(warLeaderboard[teamIndex].url, warIndex, "clan", teamIndex)
            }
        }

        let playerLeaderboard = apiWarsData.body[apiWarsData.body.length-warIndex-1].memberContributionsLeaderboard;
        if (playerLeaderboard.length == 0) {
            document.getElementById(`playerLeaderboard${warIndex}`).insertAdjacentHTML("beforeend", `
                <div class="noDataRow">
                    <h5>No data was found.</h5>
                </div>
            `)
        } else {
            for (let playerIndex in playerLeaderboard) { if(playerIndex<12){
                document.getElementById(`playerLeaderboard${warIndex}`).insertAdjacentHTML("beforeend", `
                    <div class="leaderboardRow clickableRow" id="war${warIndex}player${playerIndex}container">
                        <h5 class="luckiestGuy">${Number(playerIndex)+1}</h5>
                        <h5 id="war${warIndex}player${playerIndex}">Player ${Number(playerIndex)+1}</h5>
                        <h5 class="right">${playerLeaderboard[playerIndex].score.toLocaleString() }</h5>
                    </div>
                `)
                document.getElementById(`war${warIndex}player${playerIndex}container`).addEventListener("click", () => { loadDialog(playerLeaderboard[playerIndex].url) });
                putName(playerLeaderboard[playerIndex].url, warIndex, "player", playerIndex)
            }}
        }
    }
}

async function loadDialog(url) {
    let data = (await getData(url)).body
    console.log(data)
    document.getElementById("playerDataWindowOfficialName").innerText = data.displayName
    document.getElementById("playerDataWindowName").innerText = ""
    for (let playerIndex in teamData.players) {
        if (url == teamData.players[playerIndex].url && teamData.players[playerIndex].name.toLowerCase() != data.displayName.toLowerCase()) {
            document.getElementById("playerDataWindowOfficialName").innerText = teamData.players[playerIndex].name
            document.getElementById("playerDataWindowName").innerText = data.displayName
        }
    }
    document.getElementById("coverImageStyle").innerText += `
        .playerCoverImage {
            background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('${data.equippedBannerURL}');
            @media (prefers-color-scheme: dark) {
                background-image: linear-gradient(to top, rgba(25, 25, 25, 1), rgba(0, 0, 0, 0)), url('${data.equippedBannerURL}');
            }
        }
    `
    document.getElementById("trophies").innerText = data.currentSeason_trophies
    document.getElementById("clubMember").innerText = data.is_club_member
    document.getElementById("badges").innerHTML = ""
    for (let badgeIndex in data.badges_all) {
        document.getElementById("badges").insertAdjacentHTML("beforeend", `
            <div class="badgeBox">
                <img src="${data.badges_all[badgeIndex].iconURL}"></img>
                <h5>Season ${data.badges_all[badgeIndex].season}</h5>
            </div>
        `)
    }
    document.getElementById("playerDataWindow").showModal()
}

async function putName(url, war, type, entry) {
    let data = await getData(url)
    try {
        switch (type) {
            case "clan":
                document.getElementById(`war${war}${type}${entry}`).innerText = data.body.name
                break;
            case "player":
                document.getElementById(`war${war}${type}${entry}`).innerText = data.body.displayName
                break;
        }
    } catch {}
}