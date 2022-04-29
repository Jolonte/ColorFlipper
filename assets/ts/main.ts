"use strict";

// arrays
const colorsSimple: string[] = ['Yellow', 'Red', 'Purple', 'Blue', 'Green'];
const colorsHex: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// id's
const btn = document.querySelector('#btn');
const brand = document.querySelector('#brand');
const radioSimple = document.querySelector('#simple');

// event
btn?.addEventListener(`click`, () => changeBackground());

function changeBackground(): void {
    if ((radioSimple as HTMLInputElement).checked) {
        const rndNum: number = Math.floor(Math.random() * colorsSimple.length);
        document.body.style.backgroundColor = colorsSimple[rndNum];
        brand!.innerHTML = `Background Color: ${colorsSimple[rndNum]}`;
    }
    else {
        // let rndNum: number = Math.floor(Math.random() * colorsHex.length);
        let hexColor: number | string = '#'
        for (let index: number = 0; index < 6; index++) {
            let rndNum: number = Math.floor(Math.random() * colorsHex.length);
            hexColor += colorsHex[rndNum];
        }
        document.body.style.backgroundColor = `${hexColor}`;
        brand!.innerHTML = `Background Color: ${hexColor}`        
    }
}
