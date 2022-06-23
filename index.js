import { createMainMenu } from './mainMenu/main.js';

createMainMenu();

document.getElementById('reload').onclick = function() {reload()};
function reload() {
    location.reload(true);
}

