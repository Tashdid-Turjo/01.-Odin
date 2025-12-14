// ✅JS:
/* 
-> Keywords:
            -> Variables(using let, var, const), & Operators(number, string, logical, mathematical) (Terms- unary, binary, operand, prefix, postfix, comma),
            -> Run type -> via browser,
                        -> outside browser environment (that means it will let the browser execute the code, even if it comes from a a file we created.)
            -> Data types & Conditionals
            -> Functions
            -> Problem Solving
            -> Understanding Error
                -> Reference error {variable related, like- not declaring, mispelled},
                -> "at script.js:4:13" means, line no.4, column/character no.13 gives error,
                -> stack trace {This helps you understand when the error was thrown in your application, and what functions were called that led up to the error},
                -> Syntax error {for js, if the syntax is wrongly written},
                -> Type error {an operation or method that is not compatible with that type},
                -> Array, Loop, TDD,
                -> 



            -> Extra: odin didn't add these in basic js [Document Object Model (DOM) and the Canvas API, which are the fundamental ways JavaScript interacts with HTML.]
*/


// ------------------------------------- Variables -----------------------------------------//

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
    <script src="boiletplate.js">
      
    </script>

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



// !! ----------------------- Ex03 ------------------------------------------------*/
// !! prefix, postfix(increment/decrement) //
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


// !! ----------------------- Ex06 ------------------------------------------------*/
let counter = 1;
alert( 2 * ++counter ); // 4


// !! ----------------------- Ex07 ------------------------------------------------*/
let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value


// !! Extra //
Comma has a very low precedence. Note that the comma operator has very low precedence, 
lower than =, so parentheses are important in the example above. Without them: a = 1 + 2, 3 + 4 
evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, 
and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.





{/* // ------------------------------------- Data types & Conditionals --------------------------------// */}
{/*Ex01: Concatenation */}
{/* HTML */}
<button>Press me</button>
<div id="greeting"></div>

{/* JS */}
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);



{/* Ex02: website's color changing */}
{/* HTML */}
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>


{/* JS */}
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);



{/* Ex03: basic calendar */}
{/* HTML */}
<label for="month">Select month: </label>
<select id="month">
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>
<h1></h1>
<ul></ul>


{/* CSS */}
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

* {
  box-sizing: border-box;
}

ul {
  padding-left: 0;
}

li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}


{/* JS */}
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");



{/* Ex04 (from yt vdo- wes bos javascript30)*/}
{/* JS */}
{/* // interpolated // */}
console.log('Hello I am %s string', 'write here something');

{/* styles */}
console.log('%c I am some great text', 'font-size: 50px; background: red; color: white;');

{/* warning */}
console.warn('ohh no');

{/* error */}
console.error('oh no');

{/* info */}
console.log('shit');

{/* testing */}
console.log(1 === 1, 'that's true');   // it won't give anything //
or,
console.log(1 ===2, 'that's wrong');  // it will give error //

{/* clearing */}
console.clear();

{/* viewing DOM elements */}
console.log(p);
or,
console.dir(p);

{/* grouping together */}
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is $ {dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
or,
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is $ {dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

{/* counting */}
console.count('Tur');
console.count('Tas');
console.count('Tur');
console.count('Tas');
console.count('Tas');

{/* timing */}
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
or,
const dogs = [{name: 'snicker', age: 2}, {name: 'hugo', age: 20}];
console.table(dogs);





{/*--------------------- Functions ---------------------*/}
{/* Ex01 (function declaration(classic way))*/}

{/* JS */}
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

const message = favoriteAnimal('Goat')
console.log(message)


{/* Ex02 (function expresion) */}
{/* JS */}
const multiply = function(a, b) {
    return a * b;
};

const product = multiply(3, 2);

{/* Ex03 (Arrow function) */}
{/* // Example 1: Standard Arrow Function (with braces and return) */}
const greet = (name) => {
    return `Hello, ${name}!`;
};

{/* // Example 2: Concise Arrow Function (implicit return) */}
const add = (x, y) => x + y;

const sum = add(10, 5); // sum is 15


{/* Ex04 (function inside an object) */}
const dog = {
    name: "Buddy",
    
    // This is a method (a function inside an object)
    bark() {
        console.log(`${this.name} says WOOF!`);
    }
};

dog.bark(); // Output: Buddy says WOOF!


/* Ex05 (see the difference) */
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

--------------------- vs ---------------------

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable



// !! Task01: Write a function called add7 that takes one number and returns
// that number + 7. add7(10) should return 17.

// Inside html, it's html + js. Also added input box, "/", "enter" shortcut.
<body>
  <input id="numInput" type="number" placeholder="Enter a number">
  <button onclick="calculate()">Add 7</button>

  <p id="result"></p>

  <script>
    // to add " / " button 
    document.addEventListener("keydown", function(event) {
      if (event.key === "/") {
          event.preventDefault();  // stops "/" from typing on the page
          document.getElementById("numInput").focus();
      }
    });

    // to add "enter" button
    document.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          calculate();  // run your function
      }
    });

    // takes a number & returns number+7
    function add7(number) {
      return number + 7;
    }

    // gets the number typed in input box
    function calculate() {
      const value = Number(document.getElementById("numInput").value); // here, Number converts the text into a number.
      const answer = add7(value);
      document.getElementById("result").textContent = answer;
    }

  </script>
  </body>



// !! Task02: Write a function called multiply that takes 2 numbers and returns
// their product. Ex- multiply(3, 2) should return 6

function multiply(num1, num2) {
            return num1 * num2;
        };

console.log(multiply(3,2));
// instead of "console.log", you can write alert.
// alert vs console.log:
// alert shows the result in a extra shortbox or something that comes automatically.
// For "console.log", it doesn't come automatically, rather, in the inspect,
// inside the console, it shows the result.


// !! Task03
// Write a function called capitalize that takes a string and returns 
// that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Ex- capitalize("abcd") should return "Abcd"
// Ex- capitalize("ABCD") should return "Abcd"
// Ex- capitalize("aBcD") should return "Abcd"

<body>

    <input id="stringInput" type="string" placeholder="Enter a string">
    <button onclick="calculate()">capitalize</button>
    <p id="result"></p>

    <script>
        // to add " / " button
        document.addEventListener("keydown", function(event) {
            if (event.key === "/") {
                event.preventDefault();
                document.getElementById("stringInput").focus();
            }
        });
        
        // to add "enter" button
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                calculate();
            }
        });

        function capitalize(string) {
            let result = string[0].toUpperCase() + string.slice(1).toLowerCase();
            return result;
        };
        
        function calculate() {
            const value = document.getElementById("stringInput").value;
            const answer = capitalize(value);
            document.getElementById("result").textContent = answer;
        };
          
    </script>
    
</body>



// !! Task04:
// Write a function called lastLetter that takes a string and 
// returns the very last letter of that string:
// Ex- lastLetter("abcd") should return "d"


// If you add "bro ", then result will be space, as I haven't
// handled/worked for space here. Hopefully, will do it in future.
<body>

    <input id="LastStringInput" type="string" placeholder="Enter a string">
    <button onclick="calculate()">lastletter</button>
    <p id="result"></p>

    <script>
        // to add " / " button
        document.addEventListener("keydown", function(event) {
            if (event.key === "/") {
                event.preventDefault();
                document.getElementById("LastStringInput").focus();
            }
        });
        
        // to add "enter" button
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                calculate();
            }
        });

        function lastletter(string) {
            let result = string[string.length - 1];
            return result;
        }
        
        // console.log(lastletter("broz")); // !! Use if you wanna avoid input button & just run directly. !! //

        function calculate() {
            const value = document.getElementById("LastStringInput").value;
            const answer = lastletter(value);
            document.getElementById("result").textContent = answer;
        };
        
    </script>
    
</body>


// Type04:
// Solving Fizz Buzz

<body>

    <script>
        // a popup box appears, so that, the input box that 
        // we created before don't need for now.
        let answer = parseInt(prompt("Enter a number:"));
  
        for (let i = 1; i <= answer; i++) {
            if ((i % 3 === 0) && (i % 5 !== 0)) {
                console.log("Fizz");
            }

            else if ((i % 5 === 0) && (i % 3 !== 0)) {
                console.log("Buzz");
            }

            else if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log("FizzBuzz");
            }

            else {
                console.log(i);
            }  
        };
    </script>
    
</body>



// !! See the difference for "for" loop.
  ////////////// Type01 /////////////
  let answer = parseInt(prompt("Please enter the number: "));
  for (let i = 1; i <= answer; i++) {
      console.log(i);
  }
  //////////////////////////////////


  ////////////// Type02 /////////////
  let string = "";
  for (let i = 1; i <= answer; i++) {
      string = string + i;
      //console.log(string); // !! by writing this, it will show output for every loop.
  };
  console.log(string);
  ///////////////////////////////////</head>


{/* Ex100 (extra) */}
{/* JS(optional parameters) */}
const myArray = ["I", "love", "chocolate"];
        const madeAString = myArray.join("$");
        console.log(madeAString);

        const madeAnotherString = myArray.join();
        console.log(madeAnotherString);




// !! ----------------------- Error Handling ----------------------- !! //

/* Always try to use "console" to solve error:
console.log()
console.table()
console.trace()
.... 
N.B: "console" & "window.console" are same thing for all.

*/


// ----------------------- Type Error: ----------------------- //
// 1. Passing a wrong-type argument to a function
// Case: Function expects a number, but gets something else.
function square(x) {
    return x * x;
}

square("hello");   // TypeError: "hello" is not a number


// 2. Modifying a value that cannot be changed
// Case: Trying to change a constant variable.
const x = 10;
x = 20;    // TypeError: Assignment to constant variable


// 3. Using a value in an inappropriate way
// Case: Trying to call something that is not a function
let num = 5;
num();   // TypeError: num is not a function



// !!!!! Styding- "Read through JavaScript.info’s inside that website, task-> "Sort in decreasing order" is done." !!!!! //