let guides = [
    {
        "title": `Tack Wizard Farm: The Basics`,
        "date": `2023-06-09T14:58:55`,
    }
]

let today = new Date();

const spoonCup3 = new Date("2023-06-09T14:58:55");
console.log(spoonCup3)

let timeStringResult;
function timeString (elapsed) {
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
        timeStringResult = `updated ${Math.floor(-elapsed/2628000)} months ago`
    } else if (elapsed <= -2628000) {
        timeStringResult = `updated ${Math.floor(-elapsed/2628000)} month ago`
    } else if (elapsed <= -86400 * 2) {
        timeStringResult = `updated ${Math.floor(-elapsed/86400)} days ago`
    } else if (elapsed <= -86400) {
        timeStringResult = `updated ${Math.floor(-elapsed/86400)} day ago`
    } else if (elapsed <= -3600 * 2) {
        timeStringResult = `updated ${Math.floor(-elapsed/3600)} hours ago`
    } else if (elapsed <= -3600) {
        timeStringResult = `updated ${Math.floor(-elapsed/3600)} hour ago`
    } else if (elapsed <= -60 * 2) {
        timeStringResult = `updated ${Math.floor(-elapsed/60)} minutes ago`
    } else if (elapsed <= -60) {
        timeStringResult = `updated ${Math.floor(-elapsed/60)} minute ago`
    } else if (elapsed <= 1 * 2) {
        timeStringResult = `updated ${Math.floor(-elapsed/1)} seconds ago`
    } else if (elapsed <= 1) {
        timeStringResult = `updated ${Math.floor(-elapsed/1)} second ago`
        
    } else {
        timeStringResult = Math.floor(elapsed);
    }
}

function showTime(selector, date) {
    const elapsed = (date - today)/1000;
    today = new Date();
    timeString(elapsed);
    document.querySelector(selector).textContent = timeStringResult;
};

setInterval(showTime, 1, ".date", spoonCup3)

showTime(".date", spoonCup3);