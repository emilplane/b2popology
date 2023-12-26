let version = {
    "major": 0,
    "minor": 18,
    "patch": 0,
    "fix": 2
}

let versionString;

if (version.fix == 0) {
    if (version.patch == 0) {
        versionString = `${version.major}.${version.minor}`
    } else {
        versionString = `${version.major}.${version.minor}.${version.patch}`
    }
} else {
    versionString = `${version.major}.${version.minor}.${version.patch}.${version.fix}`
}

try {
    document.getElementById("version").innerHTML = versionString
} catch {}

let smallVersionString = ""

if (version.fix != 0) {
    smallVersionString = `.${version.patch}.${version.fix}`
} else if (version.patch != 0) {
    smallVersionString = `.${version.patch}`
}

try {
    document.getElementById("versionContainer").innerHTML = `
        <h2>Version <span class="versionText">${version.major}.${version.minor}</span><span class="minorVersions">${smallVersionString}</span></h2>
    `
} catch {}