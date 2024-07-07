const newsSection = document.getElementById("newsSection")
const newsURL = "https://raw.githubusercontent.com/emilplane/b2popology/main/json/news.json"

getNews()

function getNews() {
    fetch(newsURL)
        .then((response) => response.json())
        .then((json) => {
            json.news.forEach(item => {
                newsSection.appendChild(createInfoSection(item))
            });
        })
}

function createInfoSection(infoItem) {
    // Create main section element
    const section = document.createElement('section');
    section.classList.add('roundedBoxSection', 'contentInfoSection');

    // Create inner div for layout
    const divContainer = document.createElement('div');
    divContainer.classList.add('simpleWithButton');

    // Create left div for text content
    const divText = document.createElement('div');

    // Create <h4> element for title
    const heading = document.createElement('h4');
    heading.textContent = infoItem.title;

    // Create <p> element for description
    const paragraph = document.createElement('p');
    paragraph.textContent = infoItem.description;

    // Append <h4> and <p> to left div
    divText.appendChild(heading);
    divText.appendChild(paragraph);

    // Create right div for button
    const buttonContainer = document.createElement('div');

    infoItem.buttons.forEach(buttonContent => {
        // Create <a> element for external link button
        const link = document.createElement('a');
        link.href = buttonContent[1]
        link.target = '_blank';
        link.classList.add('buttonAnchor');
    
        // Create <button> element for the button
        const button = document.createElement('button');
        button.classList.add('linkToExternalButton');
    
        // Create <h6> element for button text
        const buttonText = document.createElement('h6');
        buttonText.textContent = buttonContent[0];
    
        // Create <span> element for button icon
        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined', 'linkToExternal');
        iconSpan.textContent = 'arrow_outward';
    
        // Append <h6> and <span> to button
        button.appendChild(buttonText);
        button.appendChild(iconSpan);

        // Append button to <a>
        link.appendChild(button);

        // Append left div and <a> to right div
        buttonContainer.appendChild(link);
    });

    // Append left and right divs to main divContainer
    divContainer.appendChild(divText);
    divContainer.appendChild(buttonContainer);

    // Append divContainer to section
    section.appendChild(divContainer);

    return section;
}