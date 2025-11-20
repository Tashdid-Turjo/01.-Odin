// ✅JS:
/* 
-> Keywords:
            -> Variables(using let, const), & Operators(number, string, logical, mathematical) (Terms- unary, binary, operand, prefix, postfix),
            -> Run type -> via browser,
                        -> outside browser environment (that means it will let the browser execute the code, even if it comes from a a file we created.)

*/




//!! 1. Creating HTML file and JS code inside of this HTML file: //
// By typing ! + Tab, gives you HTML boilerplate, applicable only in HTML file.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    {/* i. Inside HTML, write JS: */} 
    <script>
        console.log("Hello, World!")
    </script>



    {/* ii. Through External script: */ }
    <script src="boiletplate.js"></script>

</body>
</html>


// !! 2. let ->   we can re-assign //
// !!    const -> we can't re-assign, thus, it will throw error if we try. //
// !!    var ->   it can be used as let, but now-a-days, this ain't used much. //

// !! -----------------------Ex01 ------------------------------------------------*/
{/* HTML */}
<canvas id="canvas" width="400" height="200"></canvas>
<p></p>


{/* JS */}
const canvas = document.getElementById("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;



// !! -----------------------Ex02 ------------------------------------------------*/
{/* HTML */}
<button>Start machine</button>
<p>The machine is stopped.</p>


{/* JS */}
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } 
  else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}



{/*--- Start from the Odin's "variables and operators" and search this- "read through". ---*/}



// !! ----------------------- Ex03 ------------------------------------------------*/
// !! prefix, postfix //
let i = 5;
let j = 5;

// Prefix Example (++i):
// 1. i becomes 6
// 2. The NEW value (6) is assigned to a
let a = ++i; 

// Postfix Example (j++):
// 1. The OLD value (5) is assigned to b
// 2. j becomes 6
let b = j++; 

console.log("i:", i); // Output: i: 6
console.log("a:", a); // Output: a: 6 (It took the new value of i)
console.log("j:", j); // Output: j: 6
console.log("b:", b); // Output: b: 5 (It took the old value of j)



// !! ----------------------- Ex04 ------------------------------------------------*/
let counter = 0;
alert( ++counter ); // 1

// !! ----------------------- Ex05 ------------------------------------------------*/
let counter = 0;
alert( counter++ ); // 0