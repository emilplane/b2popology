const params = new URLSearchParams(window.location.search);

const buttons = document.querySelectorAll('#guideButtonContainer button');
const currentGuide = params.get("guide");

document.getElementById("guideContainer").innerHTML = (
    "<iframe src=\"./guides/" + currentGuide + ".html\" style=\"width: 100%\" height=\"1000\"></iframe>"
);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = `/pages/guides.html?guide=${button.id}`;
    });
});

