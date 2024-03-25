let tournaments = [
    {
        "name": "Popology Weekly 1",
        "type": "weekly",
        "date": "2023-12-23",
        "backgroundImage": {
            "name": "clanIsland.png",
            "yPosition": "30%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly1",
            "youtubeVod": "https://www.youtube.com/watch?v=nua-VxOlJoc"
        }
    },
    {
        "name": "Popology Weekly 2",
        "type": "weekly",
        "date": "2023-12-30",
        "backgroundImage": {
            "name": "rbc.png",
            "yPosition": "60%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly2",
        }
    },
    {
        "name": "Popology Weekly 3",
        "type": "weekly",
        "date": "2023-1-7",
        "backgroundImage": {
            "name": "rbc.png",
            "yPosition": "60%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly3",
            "youtubeVod": "https://www.youtube.com/watch?v=QFlCXkhflk4"
        }
    },
    {
        "name": "Popology Weekly 4",
        "type": "weekly",
        "date": "2023-1-15",
        "backgroundImage": {
            "name": "dragon.png",
            "yPosition": "40%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly4",
            "youtubeVod": "https://www.youtube.com/watch?v=_HYZYwEwjRY",
            "twitchHighlight": "https://www.twitch.tv/videos/2035773342"
        }
    },
    {
        "name": "Popology Weekly 5",
        "type": "weekly",
        "date": "2023-1-20",
        "backgroundImage": {
            "name": "bananaDepot.png",
            "yPosition": "15%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly5",
            "youtubeVod": "https://www.youtube.com/watch?v=0z_DsvfUPfk",
            "youtubeVideo": "https://www.youtube.com/watch?v=679k5AdbIsc",
            "twitchHighlight": "https://www.twitch.tv/videos/2038792877"
        }
    },
    {
        "name": "Popology Weekly 6",
        "type": "weekly",
        "date": "2023-1-27",
        "backgroundImage": {
            "name": "bloontoniumMines.png",
            "yPosition": "60%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly6",
        }
    },
    {
        "name": "Popology Weekly 7",
        "type": "weekly",
        "date": "2023-2-11",
        "backgroundImage": {
            "name": "salmonLadder.png",
            "yPosition": "55%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly7",
            "youtubeVod": "https://www.youtube.com/watch?v=1Nr2Nlu6h8I",
            "twitchHighlight": "https://www.twitch.tv/videos/2060145411"
        }
    },
    {
        "name": "Popology Weekly 8",
        "type": "weekly",
        "date": "2023-2-17",
        "backgroundImage": {
            "name": "koru.png",
            "yPosition": "50%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly8",
            "youtubeVod": "https://www.youtube.com/watch?v=Le_-549VMHE",
            "twitchHighlight": "https://www.twitch.tv/videos/2065762307"
        }
    },
    {
        "name": "Popology Weekly 9",
        "type": "weekly",
        "date": "2023-2-25",
        "backgroundImage": {
            "name": "rbc.png",
            "yPosition": "60%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly9",
        }
    },
    {
        "name": "Popology Weekly 10",
        "type": "weekly",
        "date": "2023-3-17",
        "backgroundImage": {
            "name": "rbc.png",
            "yPosition": "60%"
        },
        "textColor": "shade1",
        "links": {
            "bracket": "https://challonge.com/popologyweekly10",
            "youtubeVod": "https://youtu.be/29XJfbP7avI",
            "twitchHighlight": "https://www.twitch.tv/videos/2094139216"
        }
    }
]

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