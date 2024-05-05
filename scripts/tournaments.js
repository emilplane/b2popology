let tournaments;

function getTournamentData() {
    fetch("https://raw.githubusercontent.com/emilplane/b2popology/main/json/tournaments.json")
        .then((response) => response.json())
        .then((json) => main(json))
}

getTournamentData()

updateTournamentCards()

document.getElementById("sortingDropdown").addEventListener("change", () => {
    updateTournamentCards()
})

function updateTournamentCards() {
    document.getElementById("tournaments").innerHTML = ""
    for (let tournamentIndex in tournaments) {
        let tournament = tournaments[tournamentIndex]
        let linksHTML = ""
        for (let linkName in tournament.links) {
            switch (linkName) {
                case "bracket":
                    linksHTML += `<a href="${tournament.links[linkName]}"><button class="challongeButton">Challonge bracket</button></a>`
                    break
                case "youtubeVod":
                    linksHTML += `<a href="${tournament.links[linkName]}"><button class="youtubeButton">YouTube VOD</button></a>`
                    break
                case "youtubeVideo":
                    linksHTML += `<a href="${tournament.links[linkName]}"><button class="youtubeButton">YouTube Video</button></a>`
                    break
                case "twitchHighlight":
                    linksHTML += `<a href="${tournament.links[linkName]}"><button class="twitchButton">Twitch Highlight</button></a>`
                    break
                default:
                    linksHTML += `<a href="${tournament.links[linkName]}"><button>${linkName}</button></a>`
                    break
            }
        }
        let cardHTML = `
            <div class="tournamentCard">
                <div class="tournamentCardBackgroundImage tournamentCardBackgroundImage${tournamentIndex}">
                    
                </div>
                <div class="tournamentCardContent">
                    <h2 class="textShadow" style="color:var(--)">${tournament.name}</h2>
                    <h5 class="textShadow">Weekly Tournament &bull; ${new Date(tournament.date).toLocaleDateString(undefined, {timeZone: "UTC"})}</h5>
                    <div class="tournamentButtonContainer">
                        ${linksHTML}
                        
                    </div>
                </div>
                <style>
                    .tournamentCardBackgroundImage${tournamentIndex} {
                        background-position: center;
                        background-position-y: ${tournament.backgroundImage.yPosition};
                        background-image: url('media/${tournament.backgroundImage.name}')
                    }
            </style>
            </div>
        `
    switch (document.getElementById("sortingDropdown").value) {
        case "newest": default:
            document.getElementById("tournaments").insertAdjacentHTML("afterbegin", cardHTML)
            break
        case "oldest":
            document.getElementById("tournaments").insertAdjacentHTML("beforeend", cardHTML)
            break
        }
    }
}

// <button class="challongeButton">Challonge bracket</button>
// <button class="youtubeButton">YouTube VOD</button>
// <button class="twitchButton">Twitch Highlight</button>