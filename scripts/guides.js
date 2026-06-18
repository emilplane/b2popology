const params = new URLSearchParams(window.location.search);

const buttons = document.querySelectorAll('#guideButtonContainer button');
const currentGuide = params.get("guide");
const guideFrame = document.getElementById("guideFrame")
    
guideFrame.src = "/pages/guides/" + currentGuide + ".html";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = `/pages/guides.html?guide=${button.id}`;
    });
});

