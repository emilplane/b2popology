const menuIcon = document.getElementById('menuIcon');
const menuDialog = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
    menuDialog.showModal(); 
});

const menuCloseButton = document.getElementById('menuCloseButton');

menuCloseButton.addEventListener('click', function() {
    // Close the dialog
    menuDialog.close(); 
});

const startDate = new Date('2024-04-27T17:00:00.000Z');
const now = new Date();
const diffTime = (now - startDate)*-1
console.log(diffTime)
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60)); 
console.log(diffDays + " hours");

document.getElementById("tourneyHours").innerText = diffDays
document.getElementById("tourneyDate").innerText = startDate.toLocaleDateString() + " at " + startDate.toLocaleTimeString() + "!"

if (diffTime < 0) {
    document.getElementById("tournamentSection").classList.remove("tournamentSection")
    document.getElementById("tournamentSection").classList.add("tournamentSectionLive")
    document.getElementById("tourneyInfoContainer").classList.remove("tourneyInfoContainer")
    document.getElementById("tourneyInfoContainer").classList.add("tourneyInfoContainerLive")
    document.getElementById("tourneyInfoContainer").innerHTML = `
        <div>
            <h4>Watch the Popology Weekly 11 tournament now!</h4>
        </div>
        
        <a href="https://twitch.tv/b2popology" target="blank" class="buttonAnchor">
            <button class="linkToExternalButton liveTournamentButton">
                <h6>Watch now</h6>
                <div class="liveTag">
            <p>LIVE</p>
        </div>
                <span class="material-symbols-outlined linkToExternal">arrow_outward</span>
            </button>
        </a>
    `
}

// document.getElementById("eventSection").innerHTML =  `<h4 class="sectionStyle">Loading...</h4>`

// let events = [
//     {
//         "name": "Battles 2 Update 3.1 Announced",
//         "startDate": "2023-12-01T13:45:07Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/188c7o1/update_31_coming_soon_update_notes/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/188c7o1/update_31_coming_soon_update_notes/"
//             }
//         ]
//     },
//     {
//         "name": "PuniEsports Battles 2 Tournament #1",
//         "startDate": "2023-11-11T17:00:00Z",
//         "content": `
//             <p>PuniEsports is hosting a their first free entry Battles 2 Tournament! Learn more with the links below</p>
//         `,
//         "links": [
//             {
//                 "name": "Learn more on Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/173vx97/battles_2_tournament_incoming/"
//             },
//             {
//                 "name": "Learn more on Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/173vx97/battles_2_tournament_incoming/"
//             },
//             {
//                 "name": "Tournament Page",
//                 "link": "https://www.start.gg/tournament/puniesports-bloons-td-battles-2-tournaments/events"
//             },
//             {
//                 "name": "Discord Server",
//                 "link": "https://discord.gg/BzDM556Unu"
//             },
//             {
//                 "name": "Twitch Channel",
//                 "link": "https://twitch.tv/PuniEsports"
//             },
//             {
//                 "name": "Announcement Video",
//                 "link": "https://www.youtube.com/watch?v=foy_V6nTlMY&feature=youtu.be"
//             }
//         ]
//     },
//     {
//         "name": "Battles 2 Midseason Patch Update",
//         "startDate": "2023-11-10T14:15:44Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/17s4wwj/where_are_the_midseason_balance_changes/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/17s4wwj/where_are_the_midseason_balance_changes/"
//             }
//         ]
//     },
//     {
//         "name": "Battles 2 Clan Preview",
//         "startDate": "2023-11-10T14:37:00Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open here",
//                 "link": "/clanpreview.html"
//             },
//             {
//                 "name": "Open on X, formerly Twitter",
//                 "link": "https://twitter.com/btdbattles2/status/1722986780729745560"
//             }
//         ]
//     },
//     {
//         "name": "Battles 2 Update 2.2 - Balance Survey!",
//         "startDate": "2023-10-19T17:00:23Z",
//         "endDate": "2023-10-26T17:00:23Z",
//         "content": `
//             <p>Thewarrior71 has made a balance survey to gather feedback for the current update. You can submit your response with the survey link, and view everyone's responses with the results link.</p>
//             <p>After one week, the surveys are closed and sent to Ninja Kiwi. If you like the surveys, share them so they can get more feedback. </p>
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/17bnx6t/battles_2_update_22_balance_survey/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/17bnx6t/battles_2_update_22_balance_survey/"
//             },
//             {
//                 "name": "Survey Link",
//                 "link": "https://docs.google.com/forms/d/e/1FAIpQLSc-FZu5NEXhOgNoxml4WV6_RQMUrik52MuOvQbsWA5JWhpHcw/viewform"
//             },
//             {
//                 "name": "Survey Results",
//                 "link": "https://docs.google.com/spreadsheets/d/1uCkDV0f-IU21Q1DRhNd-ApHkN99mLmmjgZrSIcKkUgY/edit?usp=sharing"
//             }
//         ]
//     },
//     {
//         "name": "Battles 2 Update 2.2 Patch Notes are available!",
//         "startDate": "2023-10-09T14:36:13Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/173teat/update_22_is_coming_soon_update_notes/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/173teat/update_22_is_coming_soon_update_notes/"
//             }
//         ]
//     },
//     {
//         "name": "Battles 2 Update 2.1.2 announced!",
//         "startDate": "2023-09-14T13:39:34Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/16iis5j/update_212_is_rolling_out_now_patch_notes/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/16iis5j/update_212_is_rolling_out_now_patch_notes/"
//             }
//         ]
//     },
//     {
//         "name": "BTD6 Central enters beta!",
//         "startDate": "2023-09-04T12:00:00Z",
//         "content": `
//             <p>"After lots of development time, BTD6 Central is finally ready for 'beta.'" Check out this website by Nitjus which currently shows BTD6 race and boss stats, with more coming!</p>
//         `,
//         "links": [
//             {
//                 "name": "Open",
//                 "link": "https://btd6central.com/"
//             },
//             {
//                 "name": "Join the Discord",
//                 "link": "https://discord.gg/HnAgEkhUYM"
//             }
//         ]
//     },
//     {
//         "name": "Map Competition Winner Announced!",
//         "startDate": "2023-08-29T13:57:19Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/164j87q/the_map_competition_winner_is/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/164j87q/the_map_competition_winner_is/"
//             }
//         ]
//     },
//     {
//         "name": "Battles 2 Update 2.1.1 is out!",
//         "startDate": "2023-08-25T12:44:47Z",
//         "content": `
            
//         `,
//         "links": [
//             {
//                 "name": "Open in Reddit",
//                 "link": "https://www.reddit.com/r/battles2/comments/160yu5e/update_211_is_rolling_out_now_patch_notes/"
//             },
//             {
//                 "name": "Open in Old Reddit",
//                 "link": "https://old.reddit.com/r/battles2/comments/160yu5e/update_211_is_rolling_out_now_patch_notes/"
//             }
//         ]
//     }
// ]

// let nkapiHoms;
// async function getNkapiHomsJSON() {
// 	const requestURL = "https://data.ninjakiwi.com/battles2/homs?";
// 	const request = new Request(requestURL);
	
// 	const response = await fetch(request);
// 	nkapiHoms = await response.json();
// };

// function setStats() {
//     let seasonString = nkapiHoms.body[0].name
//     document.getElementById("seasonNumber").innerHTML = seasonString[7]+seasonString[8];
//     if (seasonString[7]+seasonString[8] == undefined) {document.getElementById("seasonNumber").innerHTML = 15}
//     let start = new Date(nkapiHoms.body[0].start)
//     let end = new Date(nkapiHoms.body[0].end)
//     let timeLeft = end-start
//     console.log(timeLeft.getTime)
// }

// function timeString (elapsed) {
//     let timeStringResult;
//     if (elapsed >= 2628000 * 2) {
//         timeStringResult = `in ${Math.floor(elapsed/2628000)} months`
//     } else if (elapsed >= 2628000) {
//         timeStringResult = `in ${Math.floor(elapsed/2628000)} month`
//     } else if (elapsed >= 86400 * 2) {
//         timeStringResult = `in ${Math.floor(elapsed/86400)} days`
//     } else if (elapsed >= 86400) {
//         timeStringResult = `in ${Math.floor(elapsed/86400)} day`
//     } else if (elapsed >= 3600 * 2) {
//         timeStringResult = `in ${Math.floor(elapsed/3600)} hours`
//     } else if (elapsed >= 3600) {
//         timeStringResult = `in ${Math.floor(elapsed/3600)} hour`
//     } else if (elapsed >= 60 * 2) {
//         timeStringResult = `in ${Math.floor(elapsed/60)} minutes`
//     } else if (elapsed >= 60) {
//         timeStringResult = `in ${Math.floor(elapsed/60)} minute`
//     } else if (elapsed >= 1 * 2) {
//         timeStringResult = `in ${Math.floor(elapsed/1)} seconds`
//     } else if (elapsed >= 1) {
//         timeStringResult = `in ${Math.floor(elapsed/1)} second`
    
//     } else if (elapsed <= 1 && elapsed >= -1) {
//         timeStringResult = `starting now`
//         console.log(1)
    
//     } else if (elapsed <= -2628000 * 2) {
//         timeStringResult = `${Math.floor(-elapsed/2628000)} months ago`
//     } else if (elapsed <= -2628000) {
//         timeStringResult = `${Math.floor(-elapsed/2628000)} month ago`
//     } else if (elapsed <= -86400 * 2) {
//         timeStringResult = `${Math.floor(-elapsed/86400)} days ago`
//     } else if (elapsed <= -86400) {
//         timeStringResult = `${Math.floor(-elapsed/86400)} day ago`
//     } else if (elapsed <= -3600 * 2) {
//         timeStringResult = `${Math.floor(-elapsed/3600)} hours ago`
//     } else if (elapsed <= -3600) {
//         timeStringResult = `${Math.floor(-elapsed/3600)} hour ago`
//     } else if (elapsed <= -60 * 2) {
//         timeStringResult = `${Math.floor(-elapsed/60)} minutes ago`
//     } else if (elapsed <= -60) {
//         timeStringResult = `${Math.floor(-elapsed/60)} minute ago`
//     } else if (elapsed <= 1 * 2) {
//         timeStringResult = `${Math.floor(-elapsed/1)} seconds ago`
//     } else if (elapsed <= 1) {
//         timeStringResult = `${Math.floor(-elapsed/1)} second ago`
        
//     } else {
//         timeStringResult = Math.floor(elapsed);
//     }
//     return timeStringResult;
// }

// function updateEvents () {
//     let eventCounter = 0
//     document.getElementById("eventSection").innerHTML = ``
//     for (const event of events) {
//         eventCounter++
        
//         let linkString;
        
//         let content = event.content;
//         if (content == null) {content = `<div></div>`} 

//         for (const link in event.links) {
//             if (linkString != undefined) {
//                 linkString = linkString + `
//                     <a target='blank' href="${event.links[link].link}"><button>${event.links[link].name}</button></a>
//                 `
//             } else {
//                 linkString = `
//                     <a target='blank' href="${event.links[link].link}"><button>${event.links[link].name}</button></a>
//                 `
//             }
//         }

//         if (linkString == undefined) {linkString = `<div></div>`}

//         document.getElementById("eventSection").insertAdjacentHTML("beforeend", `
//             <div class="roundedBox">
//                 <div style="display:flex;flex-wrap:wrap;align-items: center;">
//                     <h4>${event.name}</h4>
//                     <p class="push" id="eventDate${eventCounter}">Loading Date...</p>
//                 </div>
//                 <div>
//                     ${content}
//                 </div>
//                 <div>
//                     ${linkString}
//                 </div>
//             </div>
//         `)
//     }
// }

// function showTime(selector, date) {
//     let counter = 0;
//     for (const event of events) {
//         counter++

//         today = new Date();

//         let eventStartDate = new Date(event.startDate)
//         let startElapsed = (eventStartDate - today)/1000;
//         let timeUntilStart = timeString(startElapsed);

//         let eventEndDate = new Date(event.endDate)
//         let endElapsed = (eventEndDate - today)/1000;
//         let timeUntilEnd = timeString(endElapsed);

//         if (event.endDate == undefined) {
//             document.getElementById(`eventDate${counter}`).innerHTML = `${timeUntilStart}`
//         } else {
//             document.getElementById(`eventDate${counter}`).innerHTML = `Start: ${timeUntilStart} | End: ${timeUntilEnd}`
//         }
//     }
// };

// async function main() {
//     await getNkapiHomsJSON();
//     setStats();
//     updateEvents();
//     setInterval(showTime, 1);
// }

// main();