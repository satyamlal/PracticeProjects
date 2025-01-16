// This Calculator hits the backend server to calculated the given inputs
const calculateBtn = document.querySelector("#sumIt");
const finalSum = document.querySelector("#finalSum");

// "https://sum-server.100xdevs.com/sum?a=100&b=200"

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
