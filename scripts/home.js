let events = [
    {
        "name": "Battles 2 Update 2.2 Patch Notes are available!",
        "startDate": "2023-09-14T13:39:34Z",
        "content": `
            
        `,
        "links": [
            {
                "name": "View",
                "link": "https://b2popology.com/2_2.html"
            }
        ]
    },
    {
        "name": "Battles 2 Update 2.1.2 is out!",
        "startDate": "2023-09-14T13:39:34Z",
        "content": `
            
        `,
        "links": [
            {
                "name": "Open in Reddit",
                "link": "https://www.reddit.com/r/battles2/comments/16iis5j/update_212_is_rolling_out_now_patch_notes/"
            },
            {
                "name": "Open in Old Reddit",
                "link": "https://old.reddit.com/r/battles2/comments/16iis5j/update_212_is_rolling_out_now_patch_notes/"
            }
        ]
    },
    {
        "name": "BTD6 Central enters beta!",
        "startDate": "2023-09-04T12:00:00Z",
        "content": `
            <p>"After lots of development time, BTD6 Central is finally ready for 'beta.'" Check out this website by Nitjus which currently shows BTD6 race and boss stats, with more coming!</p>
        `,
        "links": [
            {
                "name": "Open",
                "link": "https://nitjus7.github.io/BTD6-Central/index.html"
            },
            {
                "name": "Join the Discord",
                "link": "https://discord.gg/HnAgEkhUYM"
            }
        ]
    },
    {
        "name": "Map Competition Winner Announced!",
        "startDate": "2023-08-29T13:57:19Z",
        "content": `
            
        `,
        "links": [
            {
                "name": "Open in Reddit",
                "link": "https://www.reddit.com/r/battles2/comments/164j87q/the_map_competition_winner_is/"
            },
            {
                "name": "Open in Old Reddit",
                "link": "https://old.reddit.com/r/battles2/comments/164j87q/the_map_competition_winner_is/"
            }
        ]
    },
    {
        "name": "Battles 2 Update 2.1.1 is out!",
        "startDate": "2023-08-25T12:44:47Z",
        "content": `
            
        `,
        "links": [
            {
                "name": "Open in Reddit",
                "link": "https://www.reddit.com/r/battles2/comments/160yu5e/update_211_is_rolling_out_now_patch_notes/"
            },
            {
                "name": "Open in Old Reddit",
                "link": "https://old.reddit.com/r/battles2/comments/160yu5e/update_211_is_rolling_out_now_patch_notes/"
            }
        ]
    },
    {
        "name": "Battles 2 2.1 Update Survey by thewarrior71",
        "startDate": "2023-08-24T10:00:00Z",
        "endDate": "2023-08-31T10:00:00Z",
        "content": `

        `,
        "links": [
            {
                "name": "Open in Reddit",
                "link": "https://www.reddit.com/r/battles2/comments/15zycv4/battles_2_update_21_balance_survey/"
            },
            {
                "name": "Open in Old Reddit",
                "link": "https://old.reddit.com/r/battles2/comments/15zycv4/battles_2_update_21_balance_survey/"
            },
            {
                "name": "Survey Link",
                "link": "https://forms.gle/jVGfk1LCQn6Artei9"
            },
            {
                "name": "Survey Results",
                "link": "https://docs.google.com/spreadsheets/d/1Xe-KM6HUQVZc7icpdzrnEH9ck84B7JA6D2W214jL44g/edit?usp=sharing"
            }
        ]
    },
    {
        "name": "300k Celebration and Avatar Competition",
        "startDate": "2023-08-23T15:00:35Z",
        "endDate": "2023-09-07T06:59:00Z",
        "content": `
            <p>"Every time we hit a milestone like this, our team is blown away with this community's excitement, engagement and passion for our game. You have all made the game better, giving us feedback, suggestions and your own art and designs! In line with celebrating that and all 300k of you, we are running another avatar competition!" Click "learn more" to find out more about this competition!</p>
            <p>Ninja Kiwi Terms apply.</p>
        `,
        "links": [
            {
                "name": "Open in Reddit",
                "link": "https://www.reddit.com/r/btd6/comments/15zpjcm/300k_celebration_and_avatar_competition/"
            },
            {
                "name": "Open in Old Reddit",
                "link": "https://old.reddit.com/r/btd6/comments/15zpjcm/300k_celebration_and_avatar_competition/"
            },
            {
                "name": "Ninja Kiwi Terms & Conditions",
                "link": "https://ninjakiwi.com/terms"
            },
        ]
    },
    {
        "name": "Battles 2 Update 2.1 Announced!",
        "startDate": "2023-08-11T12:44:47Z",
        "content": `
            <p>"Update 2.1 is coming soon to Battles 2! Show off your passion for popping with Monkey Prestige, set sail on an epic new map Pirate Cove and more!"</p>
        `,
        "links": [
            {
                "name": "Open in Reddit",
                "link": "https://www.reddit.com/r/battles2/comments/15o7yan/update_21_coming_soon_update_notes/"
            },
            {
                "name": "Open in Old Reddit",
                "link": "https://old.reddit.com/r/battles2/comments/15o7yan/update_21_coming_soon_update_notes/"
            },
            {
                "name": "Update Video",
                "link": "https://youtu.be/tCa4IQfsq-w"
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
    document.getElementById("seasonNumber").innerHTML = 14;
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
                <div>
                    ${linkString}
                </div>
            </div>
        `)
    }
}

function showTime() {
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