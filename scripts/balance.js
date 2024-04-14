const suggestionGrid = document.getElementById("suggestionGrid")

let suggestionsList;

function getSuggestionList() {
    fetch("https://raw.githubusercontent.com/emilplane/b2popology/main/json/balance.json")
        .then((response) => response.json())
        .then((json) => main(json))
}

getSuggestionList()

document.addEventListener('keydown', function(event) {
    if (event.key == "Escape") {closeDialog()}
});

document.getElementById("suggestionDialogCloseButton").addEventListener('click', function() {
    closeDialog()
});

function main(data) {
    suggestionsList = data
    console.log(suggestionsList)
    suggestionGrid.innerHTML = ""
    for (let i in suggestionsList) {
        let imageName = suggestionsList[i].backgroundImage
        if (imageName == undefined) {imageName = "rbc"}
        suggestionGrid.insertAdjacentHTML("beforeend", `
            <section class="suggestionContainer">
                <div class="suggestionBackgroundImage" id="suggestion${i}Image"></div>
                <div class="suggestionContent" id="suggestion0Content">
                    <h4>${suggestionsList[i].title}</h4>
                    <h6>by ${suggestionsList[i].author}</h6>
                    <div class="contentFooter">
                        <div class="suggestionStats">
                            <div class="suggestionStatContainer">
                                <span class="material-symbols-outlined upvote_symbol">
                                    arrow_drop_up
                                    </span>
                                <h6>${suggestionsList[i].upvotes}</h6>
                            </div>
                            <div class="suggestionStatContainer">
                                <span class="material-symbols-outlined downvote_symbol">
                                    arrow_drop_down
                                    </span>
                                <h6>${suggestionsList[i].downvotes}</h6>
                            </div>
                            <div class="suggestionStatContainer">
                                <span class="material-symbols-outlined ratio_symbol">
                                    bar_chart
                                    </span>
                                <h6>${
                                    voteRatio(suggestionsList[i].upvotes, suggestionsList[i].downvotes)
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
            populateDialogContent(suggestionsList[i])
            openDialog()
        })
    }
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
    for (let imgIndex in data.content.images) {
        document.getElementById("dialogImageContainer").insertAdjacentHTML("beforeend", `<img src="media/balanceMedia/${data.content.images[imgIndex]}.png" onclick="window.open('media/balanceMedia/${data.content.images[imgIndex]}.png')"/>`)
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