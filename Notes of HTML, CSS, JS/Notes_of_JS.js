// ✅JS:
/* 
-> Keywords:
            -> Variables(using let, var, const), & Operators(number, string, logical, mathematical) (Terms- unary, binary, operand, prefix, postfix, comma),
            -> Run type -> via browser,
                        -> outside browser environment (that means it will let the browser execute the code, even if it comes from a a file we created.)
            -> Data types(must know "!= vs !==" difference) & Conditionals
            -> Functions
            -> Problem Solving
            -> Understanding Error
                -> Reference error {variable related, like- not declaring, mispelled},
                -> "at script.js:4:13" means, line no.4, column/character no.13 gives error,
                -> stack trace {This helps you understand when the error was thrown in your application, and what functions were called that led up to the error},
                -> Syntax error {for js, if the syntax is wrongly written},
                -> Type error {an operation or method that is not compatible with that type},
                -> Array {has 3 powerful methods -> map, filter, reduce method}, Loop, TDD,
                -> DOM Manipulation & Events



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
{/* V.V.I.------------- != vs !== difference in condition: */}
const removeFromArray = function(arr, removedValue1, removedValue2) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] !== removedValue1) && (arr[i] !== removedValue2)) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, 2, 3], "1", 3)); // output: 1, 2

{/* here, inside if condition, !== sees if datatypes are same. Thus, !== is strict in datatype. But if i wrote !=, then it will remove 1 as well from the output, as this doesn't see if it's same datatype. */}



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





// !! ----------------------- Array & Loops & TDD ----------------------- !! //
// 1. Remember:
// P -> Parameter -> Placeholder
// A -> Argument  -> Actual Value

// 2. 3 powerful array methods -> map, filter, reduce method:
// all these methods can be considered as foreach/for loop's alternative, used when we want a returned result(new array or single value).

// map method:
// Instead of for loop, we can do this without changing the original array.
// see in this link: https://www.theodinproject.com/lessons/foundations-loops-and-arrays#the-map-method

// Ex01(map method):
function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]


// Ex02(map method with arrow function):
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

// See the difference betweeen Ex01 & Ex02. Both are collected from Odin Project website's example.



// filter method:
// map vs filter:
map(): length is always the same as the original array (each element becomes one new element).
filter(): length can be smaller or the same (it keeps only elements where the test is true) Filter runs as true/false, thought it don't show as true/false, rather, it sees codes as true/false.

But filter does not transform values — it selects existing elements. Where map transforms values.

Transformation is map();
selection is filter().


// Ex01:
function isOdd(num) {
  return num % 2 !== 0;
}

const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected



// reduce method:
reduce(): combines all array elements into one single result (e.g., a number, string, object, or even another array). So the output is not necessarily an array, and it’s not tied to the original length.


// Ex01:
const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);

console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]



// Extra: Example of combined map, filter, reduce methods.
// Task: Finding even numbers, multiply every even numbers, and finally sum every multiplied even numbers.

// Method: 01: Normal Method(without map, filter, reduce):
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumOfTripledEvens(arr) {
  let sum = 0;
  
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sum += arr[index] * 3;
    }
  }
  return sum;
}

alert(sumOfTripledEvens(arr));


// Method: 02: map, filter, reduce method combined(my approach):
function isEven(num) {
  return num % 2 === 0;
}

function multiplyThree(num) {
  return num * 3;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = arr.filter(isEven); // output: [2, 4, 6, 8, 10]
const mappedArr = evenNums.map(multiplyThree);  // output: [6, 12, 18, 24, 30]
const sumOfTripledEvenNumbers = mappedArr.reduce((total, currentItem) => {
  return total + currentItem;
}, 0);                  // output: 90

alert(sumOfTripledEvenNumbers);

/* Instead of these 3 const "evenNums, mappedArr, sumOfTripledEvenNumbers", we can use this const (only 1 const):

const sumOfTripledEvenNumbers = arr
  .filter(isEven)
  .map(multiplyThree)
  .reduce((total, currentItem) => total + currentItem, 0);

*/


// Method: 03: Odin's approach (map, filter, reduce + arrow function):
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}




// TDD(Test Driven Development):  It refers to the practice of writing automated tests that describe how your code should work before you actually write the code.
// For example, if you want to write a function that adds a couple of numbers, you would first write a test that uses the function and supplies the expected output. The test will fail before you write your code, and you should be able to know that your code works correctly when the test passes.

// Odin will explain TDD later in the course.





// !! -------------------- DOM Manipulation & Events // !! -------------------- 
// Remember this:
/*
"It’s important to remember that when using querySelectorAll, the return value
is not an array. It looks like an array, and it somewhat acts like an array, 
but it’s really a “NodeList”. The big distinction is that several array methods 
are missing from NodeLists. One solution, if problems arise, is to convert 
the NodeList into an array. You can do this with Array.from() or the 
spread operator." - Odin's DOM Part.
*/

// !! ---------------------- DOM Methods: ----------------------

// 1. Query selectors:
.querySelector()
.querySelectorAll()

// 2. Element creation:
.createElement()

// 3. Append elements:
.appendChild()
.insertBefore()

// 4. Remove elements:
.removeChild()

// 5. Altering elements:
.createElement()

// 6. Adding inline style
div.style.color = "blue";                                       // adds the indicated style rule to the element in the div variable
div.style.cssText = "color: blue; background: white;";          // adds several style rules
div.setAttribute("style", "color: blue; background: white;");   // adds several style rules

// TODO: N.B: dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
div.style.background-color;             // equivalent to: div.style.background - color
div.style.backgroundColor;              // dot notation with camelCase: works, accesses the div's background-color style
div.style["background-color"];          // bracket notation with kebab-case: also works
div.style["backgroundColor"];           // bracket notation with camelCase: also works

// 7. Editing attributes:
.setAttribute()
.getAttribute()
.removeAttribute()

// 8. Working with classes:
.classList.add()
.classList.remove()
.classList.toggle()

// 9. Adding text content:
.textContent()

// 10. Adding HTML content:
.innerHTML    //don't use this, rather it's preferred to use .textContent() . Cz, it's not safe to inject js.



// ---------------------- Ex from Odin: ---------------------- 
// HTML:
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container"></div>
</body>


// JS:
const container = document.querySelector("#container");     // inside "container" id

const content = document.createElement("div");              // created new element (tag type)
content.classList.add("content");                           // class name
content.textContent = "This is the glorious text-content!"; // text

container.appendChild(content);                             // placeholder(.appendChild means -> inside container id's last element{at the end})


// <!-- The Final DOM -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container">
    <div class="content">This is the glorious text-content!</div>
  </div>
</body>



// Usage of defer:
// When you link your js file with HTML inside HTML file's head, write this:

<head>
  <script src="js-file.js" defer></script>
</head>

// N.B: "defer" attribute is ignored if the <script> tag has no src.
// N.B: In the code, the "defer" keyword is used to load the file after the HTML is parsed.
// N.B: Deferred scripts keep their order (top to bottom).




// ---------------------- Ex from Odin: ----------------------
TASK:
// <!-- HTML file: -->
/*
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container"></div>
</body>
*/

// Odin DOM task:
// Inside this HTML file's container id's element, do these-
// 1) Create a <p> (red) with text: "Hey I'm red!" and append to #container.
// 2) Create an <h3> (blue) with text: "I'm a blue h3!" and append to #container.
// 3) Create a <div> (pink background + black border).
//  3a) Inside that div, append an <h1> "I'm in a div" and a <p> "ME TOO!".
//  3b) Then append the div to #container. (Use only JS DOM methods.)


ANS:
// <!-- JS file: -->
// 1) p
const container = document.querySelector("#container");
const content1 = document.createElement("p");
content1.textContent = "Hey I'm red!";
content1.style.color = "red";
container.appendChild(content1);

// 2) h3
// const container = document.querySelector("#container");      // TODO: No need to write this for others.
const content2 = document.createElement("h3");
content2.textContent = "I'm a blue h3!";
content2.style.color = "blue";
container.appendChild(content2);

// 3) div
// const container = document.querySelector("#container");      // TODO: No need to write this for others.
const content3 = document.createElement("div");
content3.style.cssText = "color: black; background: pink; border: 1px solid black";
container.appendChild(content3);

// 3a) div -> h1
const content3a = document.createElement("h1");
content3a.textContent = "I'm in a div";
// content3a.style.cssText = "color: black; background: pink";  // TODO: No need to add this, as this is div's child, and color, bg is already instructed there.
content3.appendChild(content3a);

// 3b) div -> p
const content3b = document.createElement("p");
content3b.textContent = "ME TOO!";
// content3b.style.cssText = "color: black; background: pink";  // TODO: No need to add this, as this is div's child, and color, bg is already instructed there.
content3.appendChild(content3b);



// !! --------------------- Events: ---------------------
// Remember this:
Events are actions that occur on your webpage, such as mouse-clicks or key-presses. 
Using JavaScript, we can make our webpage listen to and react to these events.


// Three ways:
// 1. You can specify function attributes directly on your HTML elements.
// Ex: (HTML attribute)
// HTML file:
<button onclick="alert('clicked (HTML attribute)')">Click me</button>

// 2. You can set properties in the form of on<eventType>, such as onclick or 
// onmousedown, on the DOM nodes in your JavaScript.
// Ex: (DOM property {on<eventType>})
// HTML file:
<button id="btn1">Click Me</button>

// JS file:
const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("clicked (DOM property)");

// 3. You can attach event listeners to the DOM nodes in your JavaScript.
// Ex: (addEventListener {recommended})
// HTML file:
<button id="btn2">Click Me</button>

// JS file:
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => alert("clicked (addEventListener)"));


// N.B: Event listeners(3no.) are definitely the preferred method, but others 
// are also useful. Also, 2no. is better than 1 no., but the drawback is that, 
// a DOM element can only have one “onclick” property.



// Usage of target:
// Case 1: You don't need `target` (you already know which element to change)
// You attach the listener to one button and you want to change that same button:
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "blue"; // direct reference, no target needed
});


// Case 2: `target` is useful (you want “whatever was clicked”)
// You attach one listener to a parent, but clicks can happen on many children:
const list = document.querySelector("#list"); // contains many <li>

list.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "blue"; // whichever <li> you clicked
});

// In this second case, you can’t write `li.style...` because there are 
// many `<li>` elements. `e.target` tells you exactly which one was clicked.


// Some useful events include:
click
dblclick
keydown
keyup


// Event delegation means-> too many event handlers(like- when in html, one parent element has multiple child elements.) 
// Ex:
// HTML:
<ul id="menu">
    <li><a id="home">home</a></li>
    <li><a id="dashboard">Dashboard</a></li>
    <li><a id="report">report</a></li>
</ul>


// JS:
let home = document.querySelector('#home');
home.addEventListener('click',(event) => {
    console.log('Home menu item was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('click',(event) => {
    console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('click',(event) => {
    console.log('Report menu item was clicked');
});


// JS(instead of the upper js code, you can do this, which is the event delegation technique.):
let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});


