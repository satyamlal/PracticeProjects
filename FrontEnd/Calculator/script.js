const para = document.querySelector("#finalSum");

function populateDiv() {
  const firstNum = document.querySelector("#firstNum").value;
  const secondNum = document.querySelector("#secondNum").value;
  para.innerHTML = parseInt(firstNum) + parseInt(secondNum);
}
