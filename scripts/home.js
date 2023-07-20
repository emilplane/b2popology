function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

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
        "name": "Battles 2 Popology Website Announcement",
        "startDate": "2023-07-11T17:37:44",
        "content": "Hey wait a minute, you're already here!",
        "links": [
            {
                "name": "Announcement",
                "link": "https://www.reddit.com/r/battles2/comments/14x5xie/the_battles_2_popology_website_is_now_online/"
            }
        ]
    },
    {
        "name": "Battles 2 Eco Simulator Now Available",
        "startDate": "2023-07-10T20:01:30+0000",
        "content": `The b2sim Python library is an extensive feature-rich library for simulating flowcharts within battles 2. 
            Simulating essential aspects of battles 2's income sources with virtually 100% accuracy, the library is a must-use tool for 
            optimizing eco'ing and farming with any flowchart. Results from the simulator can be used to better inform practical decisions made during games, 
            improving player game sense and leading to more optimal play. The code is relatively easy to use and does not require prior coding experience to effectively operate.`,
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

let today = new Date();

let nkapiHoms; let nkapiLeaderboard;

async function getNkapiHomsJSON() {
    const requestURL = "https://data.ninjakiwi.com/battles2/homs?";
    const request = new Request(requestURL);

    const response = await fetch(request);
    nkapiHoms = await response.json();
};

async function getNkapiLeaderboard(URL) {
    const requestURL = URL;
    const request = new Request(requestURL);

    const response = await fetch(request);
    nkapiLeaderboard = await response.json();
};

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

let eventCounter = 0
for (const event of events) {
    eventCounter++
    today = new Date(); //refresh current time

    let eventStartDate = new Date(event.startDate)
    let startElapsed = (eventStartDate - today)/1000;
    let timeUntilStart = timeString(startElapsed);

    let eventEndDate = new Date(event.endDate)
    let endElapsed = (eventEndDate - today)/1000;
    let timeUntilEnd = timeString(endElapsed);

    let linkString;
    
    let content = event.content;
    if (content == null) {content = `<div></div>`}

    for (const link in event.links) {
        if (linkString != undefined) {
            linkString = linkString + `
                <a target='blank' href="${event.links[link].link}">
                    <button class="button primaryButtonStyle3">
                        <h6>${event.links[link].name}</h6>
                    </button>
                </a>
            `
        } else {
            linkString = `
                <a target='blank' href="${event.links[link].link}">
                    <button class="button primaryButtonStyle3">
                        <h6>${event.links[link].name}</h6>
                    </button>
                </a>
            `
        }
    }

    if (linkString == undefined) {linkString = `<div></div>`}

    document.getElementById("eventSection").insertAdjacentHTML("beforeend", `
        <div class="primaryInfoCard">
            <div class="flexWrap alignBot">
                <h4>${event.name}</h4>
                <p class="push" id="eventDate${eventCounter}">Loading Date...</p>
            </div>
            <p>${content}</p>
            ${linkString}
            </div>
        </div>
    `)
}

function showTime(selector, date) {
    let counter = 0;
    for (const event of events) {
        counter++

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

setInterval(showTime, 1);

async function updateLeaderboard() {
    await getNkapiHomsJSON();
    await getNkapiLeaderboard(nkapiHoms.body[0].leaderboard);
    const leaderboardLoop = 10;
    for (let i = 0; i < leaderboardLoop; i++) {
        document.getElementById("leaderboard").insertAdjacentHTML("beforeend", 
        `
            <div class="flex alignMid gap">
                <h4>${i + 1}</h4>
                <p class="push"><a class="blackLinks" href="https://b2.lol/playerInfo/playerInfo.html?${nkapiLeaderboard.body[i].profile}"><u>${nkapiLeaderboard.body[i].displayName} | ${nkapiLeaderboard.body[i].score}</u></a></p>
            </div>
        `)
    }
    document.getElementById("b2lol").insertAdjacentHTML("beforeend",
        `
            <a href="https://b2.lol/">
                <button class="button primaryButtonStyle3" style="margin: 0 5px 0 5px">
                    <h6>See more players</h6>
                </button>
            </a>
        `)
    document.getElementById(`leaderboardName`).innerHTML = `${nkapiHoms.body[0].name} Leaderboard`
}

updateLeaderboard()