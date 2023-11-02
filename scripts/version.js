let version = {
    "major": 0,
    "minor": 15,
    "patch": 4
}

let versionString;
if (version.patch == 0) {
    versionString = `Version ${version.major}.${version.minor} - Beta`
} else {
    versionString = `Version ${version.major}.${version.minor}.${version.patch} - Beta`
}

document.getElementById("version").innerHTML = versionString;

if (version.patch == 0) {
    versionString = `${version.major}.${version.minor}`
} else {
    versionString = `${version.major}.${version.minor}.${version.patch}`
}

document.getElementById("version").innerHTML = versionString