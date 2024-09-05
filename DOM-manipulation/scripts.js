// your JavaScript file
const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I’m red!";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

const divContainer = document.querySelector("#container");

const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.style.borderColor = "black";
div.textContent = "I’m in a div";
paragraph.textContent = "ME TOO!";
divContainer.appendChild(h1);
divContainer.appendChild(div);
divContainer.appendChild(paragraph);
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  



container.appendChild(contentRed);
