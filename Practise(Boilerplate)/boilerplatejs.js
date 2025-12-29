// p
const container = document.querySelector("#container");
const content1 = document.createElement("p");
content1.textContent = "Hey I'm red!";
content1.style.color = "red";
container.appendChild(content1);

// h3
// const container = document.querySelector("#container");      // TODO: No need to write this for others.
const content2 = document.createElement("h3");
content2.textContent = "I'm a blue h3!";
content2.style.color = "blue";
container.appendChild(content2);

// div
// const container = document.querySelector("#container");      // TODO: No need to write this for others.
const content3 = document.createElement("div");
content3.style.cssText = "color: black; background: pink; border: 1px solid black";
container.appendChild(content3);

// div -> h1
const content3a = document.createElement("h1");
content3a.textContent = "I'm in a div";
// content3a.style.cssText = "color: black; background: pink";  // TODO: No need to add this, as this is div's child, and color, bg is already instructed there.
content3.appendChild(content3a);

// div -> p
const content3b = document.createElement("p");
content3b.textContent = "ME TOO!";
// content3b.style.cssText = "color: black; background: pink";  // TODO: No need to add this, as this is div's child, and color, bg is already instructed there.
content3.appendChild(content3b);