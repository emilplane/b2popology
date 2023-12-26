let version = {
    "major": 0,
    "minor": 18,
    "patch": 0,
    "fix": 1
}

let versionString;
if (version.patch == 0) {
    versionString = `Version ${version.major}.${version.minor} - Beta`
} else {
    versionString = `Version ${version.major}.${version.minor}.${version.patch} - Beta`
}

document.getElementById("version").innerHTML = versionString;

if (version.fix == 0) {
    if (version.patch == 0) {
        versionString = `${version.major}.${version.minor}`
    } else {
        versionString = `${version.major}.${version.minor}.${version.patch}`
    }
} else {
    versionString = `${version.major}.${version.minor}.${version.patch}.${version.fix}`
}

document.getElementById("version").innerHTML = versionString