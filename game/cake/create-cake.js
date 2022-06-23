import { findCakePosiotion } from "./cake-position.js";


export function createCake() {

    //check if cake exists
    let exist = document.getElementById('cake');
    if (exist) {
        let cake = document.getElementById('cake');
        cake.remove();
    }

    //create cake
    const cake = document.createElement('div');
    cake.id = ('cake');

    document.getElementById('map').appendChild(cake);

    findCakePosiotion();
}