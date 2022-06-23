
export function createSizeXSetting(sizeX) {

    //div for x
    const sizeXDiv = document.createElement('div');
    sizeXDiv.id = ('size-x-div');
    sizeXDiv.className = ('size-div');

    document.getElementById('setting-game-div').appendChild(sizeXDiv);

    //input for range of width
    const sizeXRange = document.createElement('input');
    sizeXRange.type = ('range');
    sizeXRange.id = ('size-x-range');
    sizeXRange.min = 5;
    sizeXRange.max = sizeX;
    sizeXRange.value = Math.floor((5 + sizeX) / 2);

    //label for width
    const sizeXRangeLabel = document.createElement('label');
    sizeXRangeLabel.id = ('size-x-range-label');
    sizeXRangeLabel.for = ('size-x-range');
    sizeXRangeLabel.innerText = ("Width  ");

    document.getElementById('size-x-div').appendChild(sizeXRangeLabel);
    document.getElementById('size-x-div').appendChild(sizeXRange);
    

    //listenery for range input to changed size of map
    sizeXRange.addEventListener('input', () => {
        document.getElementById('size-of-map').innerText = (document.getElementById('size-x-range').value + "x"  + document.getElementById('size-y-range').value);
    });
}

export function createSizeYSetting(sizeY) {
    //div for Y
    const sizeYDiv = document.createElement('div');
    sizeYDiv.id = ('size-y-div');
    sizeYDiv.className = ('size-div');

    document.getElementById('setting-game-div').appendChild(sizeYDiv);

    //input for range of height
    const sizeYRange = document.createElement('input');
    sizeYRange.type = ('range');
    sizeYRange.id = ('size-y-range');
    sizeYRange.min = 5;
    sizeYRange.max = sizeY;
    sizeYRange.value = Math.floor((5 + sizeY) / 2);

    //label for height
    const sizeYRangeLabel = document.createElement('label');
    sizeYRangeLabel.id = ('size-y-range-label');
    sizeYRangeLabel.for = ('size-y-range');
    sizeYRangeLabel.innerText = ("Height ");

    document.getElementById('size-y-div').appendChild(sizeYRangeLabel);
    document.getElementById('size-y-div').appendChild(sizeYRange);
    

    //listenery for range input to changed size of map
    sizeYRange.addEventListener('input', () => {
        document.getElementById('size-of-map').innerText = (document.getElementById('size-x-range').value + "x"  + document.getElementById('size-y-range').value);
    });
}
