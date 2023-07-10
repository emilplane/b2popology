let version = {
    "major": 0,
    "minor": 2,
    "patch": 9
}

let versionString = `Version ${version.major}.${version.minor}.${version.patch} - Beta`

document.getElementById("version").innerHTML = versionString;