import { createNewGameBtn } from './new-game.js';
import { createRulesBtn } from './rules.js';

//function to create main menu and runing functions
//mabye adding more?? credits something???

export function createMainMenu() {
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.id = ('main-menu');

    document.body.appendChild(mainMenuDiv);

    createNewGameBtn();
    createRulesBtn();
}

