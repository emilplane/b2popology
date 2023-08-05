let nkapiHoms;
async function getNkapiHomsJSON() {
	const requestURL = "https://data.ninjakiwi.com/battles2/homs?";
	const request = new Request(requestURL);
	
	const response = await fetch(request);
	nkapiHoms = await response.json();
};

function setStats() {
    let seasonString = nkapiHoms.body[0].name
    document.getElementById("seasonNumber").innerHTML = seasonString[7]+seasonString[8];
    let start = new Date(nkapiHoms.body[0].start)
    let end = new Date(nkapiHoms.body[0].end)
    let timeLeft = end-start
    console.log(timeLeft.getTime)
}

async function main() {
    await getNkapiHomsJSON();
    console.log(nkapiHoms);
    setStats();
}

main();