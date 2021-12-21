'use strict'

function count() {
    let deadline = new Date('jan 01 2022 00:00:00');
    let now = new Date();
    let gap = deadline-now;
    if (gap < 0) {
        return document.querySelector('#timer').innerText="Поздравляем";
    } else { 
        let d = Math.floor(gap / 1000 / 60 / 60 / 24);
        let h = Math.floor(gap / 1000 / 60 / 60) % 24;
        let m = Math.floor(gap / 1000 / 60) % 60;
        let s = Math.floor(gap / 1000) % 60;
            document.querySelector('#days').innerText = d + ' д.';
            document.querySelector('#hours').innerText = h + ' ч.';
            document.querySelector('#minutes').innerText=m + ' м.';
            document.querySelector('#seconds').innerText=s + ' с.';
    }
};
count();
setInterval(() => count(),1000);


        
