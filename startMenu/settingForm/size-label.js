



export function createSizeOfMapLabel(sizeX, sizeY) {
    //
    const sizeOfMapDiv = document.createElement('div');
    sizeOfMapDiv.id = ('size-of-map-div');
    sizeOfMapDiv.className = ('size-div');

    document.getElementById('setting-game-div').appendChild(sizeOfMapDiv);

    //size of map information
    const sizeOfMap = document.createElement('label');
    sizeOfMap.id = ('size-of-map');
    sizeOfMap.innerText = ((Math.floor((5 + sizeX) / 2)) + "x" + (Math.floor((5 + sizeY) / 2)));

    document.getElementById('size-of-map-div').appendChild(sizeOfMap);
}