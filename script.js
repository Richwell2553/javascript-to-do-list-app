"use strict";

const submitBtn = document.getElementById("add");
const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
// const editIcon = document.getElementById("pencil");

const addItem = () => {
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let editIcon = document.createElement("i");
  let trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = `<div> ${input.value}</div>`;
  editIcon.className = "fas fa-pencil";
  editIcon.addEventListener("click", () => {
    let editText = divParent.textContent;
    input.value = editText;
    divParent.remove();
  });

  divChild.appendChild(editIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);
  input.value = "";
};

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
submitBtn.addEventListener("click", () => {
  addItem();
});
