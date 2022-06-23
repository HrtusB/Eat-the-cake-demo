

export function findCakePosiotion() {

    let map = window.getComputedStyle(document.getElementById('map'));
    let mapX = parseInt(map.getPropertyValue('width'));
    let mapY = parseInt(map.getPropertyValue('height'));

    let cakeX = Math.floor(Math.random() * (mapX - 20));
    let cakeY = Math.floor(Math.random() * (mapY - 20));

    checkPosition(cakeX, cakeY);

    cake.style.left = (cakeX + 'px');
    cake.style.top = (cakeY + 'px');
}

    //check if position is NOT ocupied by player
function checkPosition(cx, cy) {
    let player = window.getComputedStyle(document.getElementById('player'));
    let px = parseInt(player.getPropertyValue('left'));
    let py = parseInt(player.getPropertyValue('top'));

    if (px < (cx + 20) && (px + 40) > cx && py < (cy + 20) && (py + 40) > cy) {
       findCakePosiotion();
    }
}
