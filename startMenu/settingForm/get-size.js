
export function getSizeX() {
    var sizeX = Math.floor((window.innerWidth - 400) / 40);
    if (sizeX >= 5) {
        return sizeX;
    }
    alert("Too small screan!");
    window.location.href = './index.html';
}

export function getSizeY() {
    var sizeY = Math.floor((window.innerHeight - 100) / 40);
    if (sizeY >= 5) {
        return sizeY;
    }
    alert("Too small screan!");
    window.location.href = './index.html';
}