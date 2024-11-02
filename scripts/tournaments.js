let announcedDate = new Date("2024-10-31T19:00:00Z");
let startDate = new Date("2024-11-09T23:00:00Z");
// let startDate = new Date("2024-09-26T17:55:40Z");

let percentageBarElement = document.getElementById("progressBar");
let progressTextElement = document.getElementById("progressText");

function getTimePassedPercentage(announcedDate, currentDate, startDate) {
    let totalTime = startDate - announcedDate;
    let timePassed = currentDate - announcedDate;

    let percentage = (timePassed / totalTime) * 100;

    // Normalize percentage to 0-100 range and enforce minimum 2% and maximum 100%
    return Math.max(2, Math.min(percentage, 100));
}

function pluralize(value, singular, plural) {
    return value === 1 ? singular : plural;
}

function updateTimeUntilStart(currentDate, startDate) {
    let timeDifference = startDate - currentDate;
    
    if (timeDifference <= 0) {
        return "Tournament has started!";
    }

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Remaining seconds

    return `Starts in: ${days} ${pluralize(days, 'day', 'days')}, ` +
       `${hours} ${pluralize(hours, 'hour', 'hours')}, ` +
       `${minutes} ${pluralize(minutes, 'minute', 'minutes')}, ` +
       `${seconds} ${pluralize(seconds, 'second', 'seconds')}`;
}

function updateProgressBarAndTime() {
    let currentDate = new Date();
    let timeDifference = startDate - currentDate;

    // Update the progress bar width
    if (timeDifference <= 0) {
        percentageBarElement.style.width = "100%";
    } else {
        let percentagePassed = getTimePassedPercentage(announcedDate, currentDate, startDate);
        percentageBarElement.style.width = `${percentagePassed}%`; // Ensure min 2%, max 100%
    }

    // Update the progress text with time remaining
    progressTextElement.innerText = updateTimeUntilStart(currentDate, startDate);
}

// Call the function to update the progress bar and the time remaining text
updateProgressBarAndTime();

// Update every second
setInterval(updateProgressBarAndTime, 100);  // Update every 1 second