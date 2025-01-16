//something here for JS
const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const para = document.querySelector("#finalSum");

function populateDiv() {
  const result = Number(firstNum.value) + Number(secondNum.value);
  para.innerText = result;
}
