import getData from "./request.js"
function setBanner(URL) {
    document.getElementById("bannerContainer").innerHTML = `
        <div class="banner" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${URL}');">

        </div>
    `
}

let gamesWon = 0;
let gamesLost = 0;
let score;
let originalScore;
async function main() {
    let url = window.location.toString().replace(/^[^?]*/, '').replace(/^\?/, '');

    let userData = await getData(url)
    let user = userData.data.body
    console.log("User Data")
    console.log(user)

    let guildURL = userData.data.body.guild
    let guildData = await getData(guildURL)
    let guild = guildData.data.body
    console.log("Clan Data")
    console.log(guild)

    let homsURL = userData.data.body.homs
    let homsData = await getData(homsURL)
    let homs = homsData.data.body
    console.log("User HoM Data")
    console.log(homs)

    setBanner(user.equippedBannerURL)

    document.getElementById("playerName").innerText = user.displayName
    document.getElementById("clanName").innerText = guild.name

    let allHomData = await getData(`https://data.ninjakiwi.com/battles2/homs`)
    let seasonHomURL = allHomData.data.body[0].leaderboard
    let seasonHomData = await getData(seasonHomURL)
    let seasonHomPage1 = seasonHomData.data
    let leaderboard = []
    let leaderboardUser;
    let leaderboardUserIndex;
    async function logLeaderboard(leaderboardData) {
        for (let userNumber in leaderboardData.body) {
            leaderboard.push(leaderboardData.body[userNumber])
            if (leaderboardData.body[userNumber].profile == url) {
                leaderboardUser = leaderboardData.body[userNumber]
                leaderboardUserIndex = leaderboard.length
            }
        }
        if (typeof leaderboardData.next == "string") {
            let nextPageData = await getData(leaderboardData.next)
            let nextPage = nextPageData.data
            await logLeaderboard(nextPage)
        }
    }
    await logLeaderboard(seasonHomPage1)
    console.log("Leaderboard")
    console.log(leaderboard)
    console.log("Leaderboard User Data")
    console.log(leaderboardUser)
    console.log(`Leaderboard Index: ${leaderboardUserIndex}`)

    if (leaderboardUser.score > score) {
        gamesWon++
    } else if (leaderboardUser.score < score) {
        gamesLost++
    }
    score = leaderboardUser.score
    if (originalScore == undefined) {
        originalScore = score
    }

    let scoreChange = score-originalScore
    if (scoreChange >= 0) {
        scoreChange = `+${scoreChange}`
    }
    document.getElementById("score").innerText = `${score}`
    document.getElementById("scoreChange").innerText = `(${scoreChange})`

    document.getElementById("wonLost").innerText = `${gamesWon} - ${gamesLost}`

    document.getElementById("place").innerText = `Rank ${leaderboardUserIndex}`
}

main()
setInterval(main, 5000);