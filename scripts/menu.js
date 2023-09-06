function openMenu () {
    document.getElementById("hamburgerDiv").style.display = "block";
}

document.getElementById("menu").addEventListener("click", openMenu);

function closeMenu () {
    document.getElementById("hamburgerDiv").style.display = "none";
}

document.getElementById("hamburgerClose").addEventListener("click", closeMenu);