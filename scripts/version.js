let version = {
    "major": 0,
    "minor": 25,
    "patch": 10,
    "content": 3
}

let versionString;

if (version.content == 0) {
    if (version.patch == 0) {
        versionString = `${version.major}.${version.minor}`
    } else {
        versionString = `${version.major}.${version.minor}.${version.patch}`
    }
} else {
    versionString = `${version.major}.${version.minor}.${version.patch}.${version.content}`
}

try {
    document.getElementById("version").innerHTML = versionString
} catch {}

let smallVersionString = ""

if (version.content != 0) {
    smallVersionString = `.${version.patch}.${version.content}`
} else if (version.patch != 0) {
    smallVersionString = `.${version.patch}`
}

try {
    document.getElementById("versionContainer").innerHTML = `
        <h2>Version <span class="versionText">${version.major}.${version.minor}</span><span class="minorVersions">${smallVersionString}</span></h2>
    `
} catch {}