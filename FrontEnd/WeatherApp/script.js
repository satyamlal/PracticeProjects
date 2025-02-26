const apiKey = "e8a945a7ce1eda1a853f40cb57f9acfc";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric?q=bangalore";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();
