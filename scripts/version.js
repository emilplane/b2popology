let version = {
    "major": 0,
    "minor": 4,
    "patch": 0
}

let versionString;
if (version.patch == 0) {
    versionString = `Version ${version.major}.${version.minor} - Beta`
} else {
    versionString = `Version ${version.major}.${version.minor}.${version.patch} - Beta`
}

document.getElementById("version").innerHTML = versionString;