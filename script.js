"use strict";

const mainContainer = document.getElementById("main-container");
const listContainer = document.getElementById("list-container");

mainContainer.style.border = "1px solid black";
mainContainer.style.padding = "20px";
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
  const ul = document.querySelector("ul");
  const li1 = document.createElement("li");
  li1.innerText = "New Item";
  li1.addEventListener("click", () => {
    li1.classList.add("highlight");
  });
  ul.appendChild(li1);
});

console.log(buttons[0]);

buttons[1].addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerText = "Updated Item";
  }
});

console.log(buttons[1]);

buttons[2].addEventListener("click", () => {
  const lis = document.querySelectorAll("li");
  const indexToBeRemoved = lis.length - 1;
  lis[indexToBeRemoved].remove();
});

console.log(buttons[2]);

const LISTITEMSHIGHLIGHT = document.querySelectorAll("li").forEach(highLight);

const highLight = addEventListener("click", () => {
  const clickHighLight = document.querySelector("li").classList.add("li");
  clickHighLight.classList.add("li");
});
