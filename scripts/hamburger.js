const menuIcon = document.getElementById('menuIcon');
const menuDialog = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
    menuDialog.showModal(); 
});

const menuCloseButton = document.getElementById('menuCloseButton');

menuCloseButton.addEventListener('click', function() {
    // Close the dialog
    menuDialog.close(); 
});