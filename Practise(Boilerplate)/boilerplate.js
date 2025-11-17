// 1. 
// let age = 11;
// console.log(age);

// age = 54;

// age = 13;
// console.log(age);



// 2.
// const pi = 3.14;
// pi = 10;

// console.log(pi);



// 3.
// let max = 57;
// let actual = max - 13;
// percentage = actual / max;

// console.log(max);
// console.log(actual);
// console.log(percentage);



// 4.
// const birthday = '18.04.1982';
// const age = someCode(birthday);

// console.log(age);



// 5.
const canvas = document.getElementById("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;