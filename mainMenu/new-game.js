import { createSettingForm } from "../startMenu/setting-form.js";

//creates button to start new game
export function createNewGameBtn() {
    const newGameBtn = document.createElement('button');
    newGameBtn.id = ('start-new-game');
    newGameBtn.innerText = ('New Game');
    newGameBtn.onclick = settingNewGame;

    document.getElementById('main-menu').appendChild(newGameBtn);
}

//setting game and than runing game
function settingNewGame() {
    // remove main menu
    let elem = document.getElementById('main-menu'); 
    elem.remove();

    //create setting menu
    const settingGame = document.createElement('form'); 
    settingGame.id = ('setting-game');

    document.body.appendChild(settingGame);

    createSettingForm();
}





