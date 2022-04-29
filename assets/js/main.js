"use strict";
// arrays
const colorsSimple = ['Yellow', 'Red', 'Purple', 'Blue', 'Green'];
const colorsHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
// id's
const btn = document.querySelector('#btn');
const brand = document.querySelector('#brand');
const radioSimple = document.querySelector('#simple');
// event
btn === null || btn === void 0 ? void 0 : btn.addEventListener(`click`, () => changeBackground());
// function
function changeBackground() {
    if (radioSimple.checked) {
        const rndNum = Math.floor(Math.random() * colorsSimple.length);
        document.body.style.backgroundColor = colorsSimple[rndNum];
        brand.innerHTML = `Background Color: ${colorsSimple[rndNum]}`;
    }
    else {
        // let rndNum: number = Math.floor(Math.random() * colorsHex.length);
        let hexColor = '#';
        for (let index = 0; index < 6; index++) {
            let rndNum = Math.floor(Math.random() * colorsHex.length);
            hexColor += colorsHex[rndNum];
        }
        document.body.style.backgroundColor = `${hexColor}`;
        brand.innerHTML = `Background Color: ${hexColor}`;
    }
}
