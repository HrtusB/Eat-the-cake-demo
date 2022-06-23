import { eatCake } from "./cake/eat-cake.js";



export function moveKey(e) {
    let move = e.key;
    let player = document.getElementById('player')
    let playerStyle = window.getComputedStyle(player);
    let map = window.getComputedStyle(document.getElementById('map'));
    
    //up
    if (move === 'ArrowUp' && parseInt(playerStyle.top) > 0) {
        let y = ((parseInt(playerStyle.top) - 20) + 'px');
        player.style.top = y;
    }
    
    //down
    if (move === 'ArrowDown' && parseInt(playerStyle.top) < parseInt(map.height) - 40) {
        let y = ((parseInt(playerStyle.top) + 20) + 'px');
        player.style.top = y;
    }
    
    //left
    if (move === 'ArrowLeft' && parseInt(playerStyle.left) > 0) {
        let x = ((parseInt(playerStyle.left) - 20) + 'px');
        player.style.left = x;
    }
    
    //right
    if (move === 'ArrowRight' && parseInt(playerStyle.left) < parseInt(map.width) - 40) {
        let x = ((parseInt(playerStyle.left) + 20) + 'px');
        player.style.left = x;
    }
    
    eatCake();

    return ;
}