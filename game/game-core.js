import { createCake } from "./cake/create-cake.js";
import { moveKey } from "./game-movement.js";
import { createPlayer } from "./player.js";

export function startGame() {

    const sizeX = document.getElementById('size-x-range').value;
    const sizeY = document.getElementById('size-y-range').value;

    let elem = document.getElementById('setting-game'); 
    elem.remove();

    //create map
    const map = document.createElement('div');
    map.id = ('map');
    map.style.width = (sizeX * 40 + 'px');
    map.style.height = (sizeY * 40 + 'px');

    document.body.appendChild(map);

    //create player
    createPlayer();
    
    //create first cake
    createCake();


    //movement keyup event listener
    document.addEventListener('keyup', (event) => {
        moveKey(event);
    });
}