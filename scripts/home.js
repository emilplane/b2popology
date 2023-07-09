let events = [
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
    },
    {
        "name": "2.0 Balance Survey",
        "startDate": "2023-06-28T14:21:20",
        "endDate": "2023-07-06T14:21:20",
        "content": null,
        "links": [
            {
                "name": "Survey",
                "link": "https://docs.google.com/forms/d/e/1FAIpQLSeF3m9kgCDt0cnnFJobAeiBrDNcuo-s4T2osdK7syQJujBGbQ/viewform"
            },
            {
                "name": "Reddit Post",
                "link": "https://www.reddit.com/r/battles2/comments/14m6ae2/battles_2_update_20_balance_survey/"
            }
        ]
    },
    {
        "name": "Battles 2 Update 2.0.2",
        "startDate": "2023-06-26T13:55:30",
        "content": null,
        "links": [
            {
                "name": "Patch Notes",
                "link": "https://reddit.com/r/battles2/comments/14ji07p/update_202_is_now_rolling_out_patch_notes/"
            }
        ]
    }
]

let today = new Date();

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

//Start: ${timeUntilStart} | End: ${timeUntilEnd}