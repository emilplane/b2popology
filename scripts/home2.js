let events = [
    {
        "name": "Battles 2 Update 2.0.4",
        "startDate": "2023-07-18T11:40:00",
        "content": null,
        "links": [
            {
                "name": "Patch Notes",
                "link": "https://www.reddit.com/r/battles2/comments/152t5pn/update_204_is_rolling_out_now_patch_notes/"
            }
        ]
    },
    {
        "name": "Battles 2 Eco Simulator Now Available",
        "startDate": "2023-07-10T20:01:30+0000",
        "content": `<p>The b2sim Python library is an extensive feature-rich library for simulating flowcharts within battles 2. 
            Simulating essential aspects of battles 2's income sources with virtually 100% accuracy, the library is a must-use tool for 
            optimizing eco'ing and farming with any flowchart. Results from the simulator can be used to better inform practical decisions made during games, 
            improving player game sense and leading to more optimal play. The code is relatively easy to use and does not require prior coding experience to effectively operate.</p>`,
        "links": [
            {
                "name": "Tutorial",
                "link": "https://www.youtube.com/watch?v=kvGkgIr-ts8"
            },
            {
                "name": "GitHub",
                "link": "https://github.com/redlaserbmBTD/BTDB2_SIMULATOR"
            },
            {
                "name": "PyPI",
                "link": "https://pypi.org/project/b2sim/"
            }
        ]
    },
    {
        "name": "Battles 2 Update 2.0.3",
        "startDate": "2023-06-30T08:51:33",
        "content": null,
        "links": [
            {
                "name": "Patch Notes",
                "link": "https://reddit.com/r/battles2/comments/14muyub/update_203_is_rolling_out_now_patch_notes/"
            }
        ]
    }
]

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

function timeString (elapsed) {
    let timeStringResult;
    if (elapsed >= 2628000 * 2) {
        timeStringResult = `in ${Math.floor(elapsed/2628000)} months`
    } else if (elapsed >= 2628000) {
        timeStringResult = `in ${Math.floor(elapsed/2628000)} month`
    } else if (elapsed >= 86400 * 2) {
        timeStringResult = `in ${Math.floor(elapsed/86400)} days`
    } else if (elapsed >= 86400) {
        timeStringResult = `in ${Math.floor(elapsed/86400)} day`
    } else if (elapsed >= 3600 * 2) {
        timeStringResult = `in ${Math.floor(elapsed/3600)} hours`
    } else if (elapsed >= 3600) {
        timeStringResult = `in ${Math.floor(elapsed/3600)} hour`
    } else if (elapsed >= 60 * 2) {
        timeStringResult = `in ${Math.floor(elapsed/60)} minutes`
    } else if (elapsed >= 60) {
        timeStringResult = `in ${Math.floor(elapsed/60)} minute`
    } else if (elapsed >= 1 * 2) {
        timeStringResult = `in ${Math.floor(elapsed/1)} seconds`
    } else if (elapsed >= 1) {
        timeStringResult = `in ${Math.floor(elapsed/1)} second`
    
    } else if (elapsed <= 1 && elapsed >= -1) {
        timeStringResult = `starting now`
        console.log(1)
    
    } else if (elapsed <= -2628000 * 2) {
        timeStringResult = `${Math.floor(-elapsed/2628000)} months ago`
    } else if (elapsed <= -2628000) {
        timeStringResult = `${Math.floor(-elapsed/2628000)} month ago`
    } else if (elapsed <= -86400 * 2) {
        timeStringResult = `${Math.floor(-elapsed/86400)} days ago`
    } else if (elapsed <= -86400) {
        timeStringResult = `${Math.floor(-elapsed/86400)} day ago`
    } else if (elapsed <= -3600 * 2) {
        timeStringResult = `${Math.floor(-elapsed/3600)} hours ago`
    } else if (elapsed <= -3600) {
        timeStringResult = `${Math.floor(-elapsed/3600)} hour ago`
    } else if (elapsed <= -60 * 2) {
        timeStringResult = `${Math.floor(-elapsed/60)} minutes ago`
    } else if (elapsed <= -60) {
        timeStringResult = `${Math.floor(-elapsed/60)} minute ago`
    } else if (elapsed <= 1 * 2) {
        timeStringResult = `${Math.floor(-elapsed/1)} seconds ago`
    } else if (elapsed <= 1) {
        timeStringResult = `${Math.floor(-elapsed/1)} second ago`
        
    } else {
        timeStringResult = Math.floor(elapsed);
    }
    return timeStringResult;
}

function updateEvents () {
    let eventCounter = 0
    for (const event of events) {
        eventCounter++
        
        let linkString;
        
        let content = event.content;
        if (content == null) {content = `<div></div>`} 

        for (const link in event.links) {
            if (linkString != undefined) {
                linkString = linkString + `
                    <a target='blank' href="${event.links[link].link}"><button>${event.links[link].name}</button></a>
                `
            } else {
                linkString = `
                    <a target='blank' href="${event.links[link].link}"><button>${event.links[link].name}</button></a>
                `
            }
        }

        if (linkString == undefined) {linkString = `<div></div>`}

        document.getElementById("eventSection").insertAdjacentHTML("beforeend", `
            <div class="roundedBox">
                <div style="display:flex;flex-wrap:wrap;align-items: center;">
                    <h4>${event.name}</h4>
                    <p class="push" id="eventDate${eventCounter}">Loading Date...</p>
                </div>
                ${content}
                ${linkString}
            </div>
        `)
    }
}

function showTime(selector, date) {
    let counter = 0;
    for (const event of events) {
        counter++

        today = new Date();

        let eventStartDate = new Date(event.startDate)
        let startElapsed = (eventStartDate - today)/1000;
        let timeUntilStart = timeString(startElapsed);

        let eventEndDate = new Date(event.endDate)
        let endElapsed = (eventEndDate - today)/1000;
        let timeUntilEnd = timeString(endElapsed);

        if (event.endDate == undefined) {
            document.getElementById(`eventDate${counter}`).innerHTML = `${timeUntilStart}`
        } else {
            document.getElementById(`eventDate${counter}`).innerHTML = `Start: ${timeUntilStart} | End: ${timeUntilEnd}`
        }
    }
};

async function main() {
    await getNkapiHomsJSON();
    console.log(nkapiHoms);
    setStats();
    updateEvents();
    setInterval(showTime, 1);
}

main();