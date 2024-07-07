const versionHistoryURL = "https://raw.githubusercontent.com/emilplane/b2popology/main/json/version.json"
        const mainContainer = document.getElementById("versionHistoryContainer")

        getVersionHistory()
        function getVersionHistory() {
            fetch(versionHistoryURL)
                .then((response) => response.json())
                .then((json) => main(json))
        }

        function main(json) {
            console.log(json)

            let currentVersionString = json.currentVersion.toString().replace(/,/g, '.')
            document.getElementById("versionText").innerText = `Version ${currentVersionString}`
            
            for (let majorVersionNumber in json.versionHistory) {
                const majorVersion = json.versionHistory[majorVersionNumber]
                const keys = Object.keys(majorVersion);
                keys.reverse().forEach(minorVersionNumber => {
                    const minorVersion = majorVersion[minorVersionNumber]

                    const minorVersionTitleContainer = document.createElement("section")
                    minorVersionTitleContainer.classList.add("blankSection", "minorVersionTitle")
                    const minorVersionText = document.createElement("h4")
                    minorVersionText.innerText = `v0.${minorVersionNumber}`
                    minorVersionTitleContainer.appendChild(minorVersionText)
                    mainContainer.appendChild(minorVersionTitleContainer)

                    const minorVersionContentContainer = document.createElement("section")
                    minorVersionContentContainer.classList.add("roundedBoxSection")
                    
                    minorVersionSummaryContainer = document.createElement("div")
                    minorVersionFullContentContainer = document.createElement("div")
                    
                    if (minorVersionNumber == keys[0]) {
                        minorVersionSummaryContainer.classList.add("minorVersionSummaryContainer", "hideSection")
                        minorVersionFullContentContainer.classList.add("minorVersionFullContentContainer")
                    } else {
                        minorVersionSummaryContainer.classList.add("minorVersionSummaryContainer")
                        minorVersionFullContentContainer.classList.add("minorVersionFullContentContainer", "hideSection")
                    }

                    let amountOfPatches = 0
                    for (let patchNumber in minorVersion) {
                        amountOfPatches++
                        const patch = minorVersion[patchNumber]
                        const patchTitle = document.createElement("h5")
                        patchTitle.innerText = `Version ${patch.version.toString().replace(/,/g, '.')}`
                        minorVersionFullContentContainer.appendChild(patchTitle)
                        const dividingLine = document.createElement("div")
                        dividingLine.classList.add("horizontalLine")
                        minorVersionFullContentContainer.appendChild(dividingLine)
                        patch.content.forEach(string => {
                            const contentText = document.createElement("p")
                            contentText.innerText = string
                            minorVersionFullContentContainer.appendChild(contentText)
                        });
                        const keys = Object.keys(minorVersion);
                        if (patchNumber != keys[keys.length - 1]) {
                            const patchGap = document.createElement("div")
                            patchGap.classList.add("patchGap")
                            minorVersionFullContentContainer.appendChild(patchGap)
                        }
                    }

                    const numberOfPatchesText = document.createElement("p")
                    numberOfPatchesText.innerText = `${amountOfPatches} patch${amountOfPatches === 1 ? '' : 'es'}`;

                    const mostRecentDateText = document.createElement("p")
                    const minorVersionEntries = Object.entries(minorVersion);
                    const lastEntry = minorVersionEntries[minorVersionEntries.length - 1];
                    mostRecentDateText.innerText = new Date(lastEntry[1].date).toLocaleDateString(undefined, { year: "numeric", month: "long" })

                    minorVersionSummaryContainer.appendChild(numberOfPatchesText)
                    minorVersionSummaryContainer.appendChild(mostRecentDateText)
                    minorVersionContentContainer.appendChild(minorVersionSummaryContainer)
                    minorVersionContentContainer.appendChild(minorVersionFullContentContainer)
                    
                    minorVersionContentContainer.addEventListener("click", function () {
                        const summarySection = minorVersionContentContainer.querySelector(".minorVersionSummaryContainer")
                        const fullSection = minorVersionContentContainer.querySelector(".minorVersionFullContentContainer")
                        if (summarySection.classList.contains("hideSection")) {
                            fullSection.classList.add("hideSection")
                            summarySection.classList.remove("hideSection")
                        } else if (fullSection.classList.contains("hideSection")) {
                            fullSection.classList.remove("hideSection")
                            summarySection.classList.add("hideSection")
                        }
                    })

                    mainContainer.appendChild(minorVersionContentContainer)
                });
            }
        }