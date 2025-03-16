const headerWrapper = document.getElementById('headerWrapper');
const navDialog = document.getElementById('menu');
const pages = [
    { name: 'index', title: 'Home', href: 'index.html' },
    { name: 'popology', title: 'Popology', href: 'popology.html' },
    { name: 'tournaments', title: 'Tournaments', href: 'tournaments.html' },
    { name: 'discord', title: 'Discord', href: 'https://discord.com/invite/9YAaxDXAYZ' },
]

export function navigationBar(currentPage) {
    headerWrapper.innerHTML = '';
    navDialog.innerHTML = '';

    const title = document.createElement('h4');
    title.classList.add('title', 'luckiestGuy');
    title.innerText = 'Battles 2 Popology'

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerStyle');
    headerContainer.append(title);

    const headerContent = document.createElement('div');
    headerContent.classList.add('headerContent');
    pages.forEach(page => {
        const text = document.createElement('h5');
        text.innerText = page.title;
        if (currentPage === page.name) {
            text.classList.add('active');
        }

        const anchor = document.createElement('a');
        anchor.href = page.href;
        anchor.append(text);
        headerContent.append(anchor);
    })

    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menuIcon');
    menuIcon.id = 'menuIcon';

    const menuIconSpan = document.createElement('span');
    menuIconSpan.classList.add('material-symbols-outlined', 'menuIcon');
    menuIconSpan.innerText = 'menu';
    menuIcon.append(menuIconSpan);

    headerContainer.append(title);
    headerContainer.append(headerContent);
    headerContainer.append(menuIcon);

    headerWrapper.append(headerContainer);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menuHeader');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('luckiestGuy');
    menuTitle.innerText = 'Battles 2 Popology';

    const closeIcon = document.createElement('span');
    closeIcon.classList.add('material-symbols-outlined', 'menuClose');
    closeIcon.id = 'menuCloseButton';
    closeIcon.innerText = 'close';

    menuHeader.append(menuTitle);
    menuHeader.append(closeIcon);
    navDialog.append(menuHeader);

    pages.forEach(page => {
        const text = document.createElement('h3');
        text.innerText = page.title;

        const anchor = document.createElement('a');
        anchor.href = page.href;
        anchor.append(text);
        navDialog.append(anchor);
    })
}