import { end } from "../end.js";
import { createCake } from "./create-cake.js";

    //counting how many cakes were eaten
var counter = {
    count: 0
}

export function eatCake() {

    let playerStyle = window.getComputedStyle(document.getElementById('player'));
    let px = parseInt(playerStyle.getPropertyValue('left'));
    let py = parseInt(playerStyle.getPropertyValue('top'));
    let cake = window.getComputedStyle(document.getElementById('cake'));
    let cx = parseInt(cake.getPropertyValue('left'));
    let cy = parseInt(cake.getPropertyValue('top'));

    //compare position of cake and player
    if (px <= cx && (px + 40) >= (cx + 20) && py <= cy && (py + 40) >= (cy + 20)) {
       console.log("nom nom nom nom");
       createCake();
       counter.count++;
    }    

    //its just a demo so make it simple and max 10 cakes
    if (counter.count === 10) {
        end();
    }
}