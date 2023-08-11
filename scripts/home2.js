let events = [
    {
        "name": "Battles 2 Update 2.1 Announced!",
        "startDate": "2023-08-11T12:44:47Z",
        "content": `
            <p>"Update 2.1 is coming soon to Battles 2! Show off your passion for popping with Monkey Prestige, set sail on an epic new map Pirate Cove and more!"</p>
        `,
        "links": [
            {
                "name": "Patch Notes",
                "link": "https://www.reddit.com/r/battles2/comments/15o7yan/update_21_coming_soon_update_notes/"
            },
            {
                "name": "Update Video",
                "link": "https://youtu.be/tCa4IQfsq-w"
            }
        ]
    },
    {
        "name": "Star Captain Map Design Competition",
        "startDate": "2023-08-10T02:09:57Z",
        "endDate": "2023-08-20T22:59:59Z",
        "content": `
            <p>"Have you ever fancied trying your hand at designing a map for Battles 2? Well, now is your chance! With work on Star Captain Jericho well underway and looking good for launch in update 2.2, we wanted to give you all the chance to design a map to go with him!" Click "learn more" to find out more about this competition!</p>
            <p>Ninja Kiwi Terms apply.</p>
        `,
        "links": [
            {
                "name": "Learn more",
                "link": "https://www.reddit.com/r/battles2/comments/152t5pn/update_204_is_rolling_out_now_patch_notes/"
            },
            {
                "name": "Ninja Kiwi Terms & Conditions",
                "link": "https://ninjakiwi.com/terms"
            },
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
    document.getElementById("seasonNumber").innerHTML = 13;
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
                <div>
                    ${content}
                </div>
                <div class="gap"></div>
                <div>
                    ${linkString}
                </div>
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