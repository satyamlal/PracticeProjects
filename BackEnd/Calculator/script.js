// This Calculator hits the backend server to calculated the given inputs
const calculateBtn = document.querySelector("#sumIt");
const finalSum = document.querySelector("#finalSum");

// Calculating the sum using fetch
function calculateSum() {
  const fnum = document.querySelector("fnum").value;
  const snum = document.querySelector("snum").value;

  fetch("https://sum-server.100xdevs.com/sum?a=" + fnum + "&b=" + snum).then(
    (response) => {
      response.text().then((ans) => {
        finalSum.innerHTML = ans;
      });
    }
  );
}

//Calculating the sum by explicitly making the function async
async function calculateSum2() {
  const fnum = document.querySelector("#fnum");
  const snum = document.querySelector("#snum");
  const response = await fetch(
    "https://sum-server.100xdevs.com/sum?a=" + fnum + "&b=" + snum
  );
  const ans = await response.text();
  finalSum.innerHTML = ans;
}
