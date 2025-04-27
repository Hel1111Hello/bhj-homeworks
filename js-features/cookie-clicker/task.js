"use strict";

let totalClicks = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let clicks = 0;
let date;
totalClicks.innerHTML += `<br>Скорость клика: 0`;

cookie.addEventListener('mousedown', () => {
    clicks++;

    if (clicks > 1) totalClicks.innerHTML = clicks + `<br>Скорость клика: ${(1 /((new Date() - date) / 1000)).toFixed(2)}`;
    else totalClicks.innerHTML = clicks + "<br>Скорость клика: 0";

    date = new Date();
    cookie.style.width = "250px";
});

cookie.addEventListener('mouseup', () => {
    cookie.style.width = "200px";
});

