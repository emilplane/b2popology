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
    // let userData = (await getData(`https://data.ninjakiwi.com/battles2/users/9cb81682dc96aaa61b47871e5d22b426cb561bbf9d138c6e`))
    let userData = (await getData(url))
    // let userData = (await getData(`https://data.ninjakiwi.com/battles2/users/9fbe16898e95f1f34a448b490a27e575cc001aba9f16dd6b`, true))
    // let userData = (await getData(`https://data.ninjakiwi.com/battles2/users/9fbe458d8bc2acf01c4286190b73e272c80119e99619df3e`, true))
    // let userData = (await getData(`https://data.ninjakiwi.com/battles2/users/9fbf438edcc4fcf64a42da4b5a71e77e990148b498428a31`))
    let user = userData.data.body
    console.log(user)

    let guildURL = userData.data.body.guild
    let guildData = (await getData(guildURL, true))
    let guild = guildData.data.body
    console.log(guild)

    let homsURL = userData.data.body.homs
    let homsData = (await getData(homsURL, true))
    let homs = homsData.data.body
    console.log(homs)

    setBanner(user.equippedBannerURL)

    document.getElementById("playerName").innerText = user.displayName
    document.getElementById("clanName").innerText = guild.name

    if (homs[0].score > score) {
        gamesWon++
    } else if (homs[0].score < score) {
        gamesLost++
    }
    score = homs[0].score
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
    
    document.getElementById("place").innerText = `Rank ${homs[0].rank}`
}

main()
setInterval(main, 5000);