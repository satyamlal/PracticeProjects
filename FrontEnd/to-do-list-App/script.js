const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const errorMessage = document.querySelector(".error");
const errorPara = document.querySelector("p");

function addTask() {
  if (inputBox.value.trim() === "") {
    errorMessage.style.display = "flex";
    errorPara.textContent = "You must write something!!!";
  } else {
    // Hide error message if it's visible
    errorMessage.style.display = "none";

    // Create a new list item for each task
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    // If a span (the cross button) is clicked, remove its parent <li> and exit.
    if (e.target.tagName === "SPAN") {
      const parentLi = e.target.closest("li");
      if (parentLi) {
        parentLi.remove();
      }
      return; // Exit early to prevent toggling the checked class.
    }

    // Otherwise, if a list item or any of its children (other than span) is clicked,
    // toggle the "checked" class to apply a strike-through.
    const li = e.target.closest("li");
    if (li && listContainer.contains(li)) {
      li.classList.toggle("checked");
    }
  },
  false
);
