import { startGame } from "../../game/game-core.js";


export function createStartBtn() {
    const startBtn = document.createElement('button');
    startBtn.id = ('confirm-btn');
    startBtn.innerHTML = ("start");
    document.getElementById('setting-game-div').appendChild(startBtn);

    startBtn.addEventListener('click', function () {
        startGame();
    });
}

export function createCancelBtn() {
    const cancelBtn = document.createElement('button');
    cancelBtn.id = ('cancel-btn');
    cancelBtn.innerText = ("cancel");
    document.getElementById('setting-game-div').appendChild(cancelBtn);
}