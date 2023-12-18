async function getData(url, log) {
    const response = await fetch(url);
    const data = await response.json();
    if (log) {console.log(data)}
    return data
}

let teamData;

main()

async function main() {
    teamData = await getData("https://raw.githubusercontent.com/emilplane/b2popology/main/json/clanRoster.json", true)
    warsHTML()
}

function warsHTML() {
    for (let warIndex in teamData.wars) {
        console.log(teamData.wars[warIndex])
        document.getElementById("clanWarsContainer").insertAdjacentHTML("afterbegin", `
            <section class="roundedBoxSection">
                <h2 class="luckiestGuy">Clan War ${Number(warIndex)+1}</h2>
                <div class="horizontalLine"></div>
                <div class="warSummaryBottom">
                    <button>See more</button>
                </div>
            </section>
        `)
    }
}