"use strict";

let dead = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function updateScore() {
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;

    if (dead == 10) {
        alert('Победа')
        reset();
    }
    else if (lost == 5) {
        alert('Поражение')
        reset();
    } 
}

function reset() {
    dead = 0;
    lost = 0;
    updateScore();
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
      this.classList.contains("hole_has-mole") ? dead++ : lost++;
      updateScore();
    };
}