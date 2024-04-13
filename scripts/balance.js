const testSuggestions = [
    {
        "title": "Remove the Farmer/Bloon bot screen when queueing ranked",
        "author": "MasterOfMath",
        "backgroundImage": "bloonBot",
        "upvotes": 16,
        "downvotes": 1,
        "content": {
            "text": [
                "Currently whenever you queue ranked you have to waste 5s or so confirming, this should be made instant or a toggle in settings so you dont have to deal with this screen"
            ],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1225187982575800420"
    },
    {
        "title": "Make Mortar target \"follow mouse\" by default",
        "author": "Vuldora",
        "backgroundImage": "mortarTarget",
        "upvotes": 13,
        "downvotes": 3,
        "content": {
            "text": [
                "You almost always set all your mortars to follow mouse except your signal flare, making follow mouse the default when you place down a mortar remove unnecessary steps, also it will be consistent with Dartling and Heli which follow mouse by default"
            ],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1225191059903090738"
    },
    {
        "title": "Move Farmers and Bloon Bots to below abilities instead of above",
        "author": "DestructivForce",
        "backgroundImage": "bloonBot",
        "upvotes": 17,
        "downvotes": 0,
        "content": {
            "text": [
                "Since bloon bots and farmers look exactly like abilities and are in the exact same ui element as abilities, some players get tripped up hitting the wrong ability hotkey, at least until they get used to farmers and bloon bots being there. This was a major issue when bloon bots and farmers were first introduced, and while most HoM players have gotten used to it, newer players are still likely to get confused. If bloon bots and farmers showed at the end of the ability list rather than the beginning, this would not be an issue."
            ],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1225191101036761199"
    },
    {
        "title": "004 alch now tells you how much money you made",
        "author": "Enders",
        "backgroundImage": "r2g",
        "upvotes": 17,
        "downvotes": 1,
        "content": {
            "text": [],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1225191547260112937"
    },
    {
        "title": "Surrender button when syncing",
        "author": "Enders",
        "backgroundImage": "rbc",
        "upvotes": 13,
        "downvotes": 1,
        "content": {
            "text": ["When syncing/reconnecting, have a button which lets you surrender (since the surrender button gets soft locked when you are syncing/reconnecting)"],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1225192195049656360"
    },
    {
        "title": "Add a random map button to private matches",
        "author": "TheOneAndOnlyGhast",
        "backgroundImage": "randomQuad",
        "upvotes": 16,
        "downvotes": 0,
        "content": {
            "text": [
                "Add a random map button to private matches. This would be a great option for tournaments or just messing around with your friends, and isn't a massive feature to code. It shouldn't take too much content out of a major update, and would honestly be a great addition.",
                "One more thing: there should be a menu where you can pick which arena you get maps from. So you could pick WW maps only, HoM maps only, etc."
            ],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1225202764011802694"
    },
    {
        "title": "Revert Ninja changes",
        "author": "Minimum",
        "backgroundImage": "ninjas",
        "upvotes": 11,
        "downvotes": 0,
        "content": {
            "text": [
                "Revert all the stupid caltrops changes all the way back to one damage and also revert the +1 pierce buff"
            ],
            "images": []
        },
        "discordLink": "https://canary.discord.com/channels/1098330258371002470/1131006164197441566/1226602835123245107"
    }
]

const suggestionGrid = document.getElementById("suggestionGrid")

document.addEventListener('keydown', function(event) {
    if (event.key == "Escape") {closeDialog()}
});

document.getElementById("suggestionDialogCloseButton").addEventListener('click', function() {
    closeDialog()
});

suggestionGrid.innerHTML = ""
for (let i in testSuggestions) {
    let imageName = testSuggestions[i].backgroundImage
    if (imageName == undefined) {imageName = "rbc"}
    suggestionGrid.insertAdjacentHTML("beforeend", `
        <section class="suggestionContainer">
            <div class="suggestionBackgroundImage" id="suggestion${i}Image"></div>
            <div class="suggestionContent" id="suggestion0Content">
                <h4>${testSuggestions[i].title}</h4>
                <h6>by ${testSuggestions[i].author}</h6>
                <div class="contentFooter">
                    <div class="suggestionStats">
                        <div class="suggestionStatContainer">
                            <span class="material-symbols-outlined upvote_symbol">
                                arrow_drop_up
                                </span>
                            <h6>${testSuggestions[i].upvotes}</h6>
                        </div>
                        <div class="suggestionStatContainer">
                            <span class="material-symbols-outlined downvote_symbol">
                                arrow_drop_down
                                </span>
                            <h6>${testSuggestions[i].downvotes}</h6>
                        </div>
                        <div class="suggestionStatContainer">
                            <span class="material-symbols-outlined ratio_symbol">
                                bar_chart
                                </span>
                            <h6>${
                                voteRatio(testSuggestions[i].upvotes, testSuggestions[i].downvotes)
                            }%</h6>
                        </div>
                    </div>
                    <button class="moreButton" id="moreButton${i}">
                        See more
                    </button>
                </div>
            </div>
            <style>
                #suggestion${i}Image {
                    background-position: center;
                    background-position-y: 50%;
                    background-image: url('media/balanceMedia/${imageName}.png')
                }
            </style>
        </section>
    `)
    document.getElementById("moreButton" + i).addEventListener("click", () => {
        populateDialogContent(testSuggestions[i])
        openDialog()
    })
}

function populateDialogContent(data) {
    document.getElementById("dialogTitle").innerText = data.title
    document.getElementById("dialogAuthor").innerText = `by ${data.author}`
    document.getElementById("dialogUpvotes").innerText = data.upvotes
    document.getElementById("dialogDownvotes").innerText = data.downvotes
    document.getElementById("dialogRatio").innerText = voteRatio(data.upvotes, data.downvotes) + "%"
    document.getElementById("dialogMain").innerHTML = ""
    for (let textIndex in data.content.text) {
        document.getElementById("dialogMain").insertAdjacentHTML("beforeend", `<p>${data.content.text[textIndex]}</p>`)
    }
    document.getElementById("dialogBackgroundImageStyle").innerText = `
        .dialogBackgroundImage {
            background-position: center;
            background-position-y: 50%;
            background-image: url('media/balanceMedia/${data.backgroundImage}.png')
        }
    `
    document.getElementById("dialogDiscordButtonContainer").innerHTML = `<button id="dialogDiscordButton">Corresponding Discord post</button>`
    document.getElementById("dialogDiscordButton").addEventListener("click", () => {window.open(data.discordLink)})
}

function closeDialog() {
    document.getElementById("suggestionDialog").close()
    document.getElementById("suggestionDialog").classList.add("hideSuggestionDialog")
}

function openDialog() {
    document.getElementById("suggestionDialog").showModal()
    document.getElementById("suggestionDialog").classList.remove("hideSuggestionDialog")
}

function voteRatio(upvotes, downvotes) {
    return Math.round(upvotes/(upvotes+downvotes)*100)
}