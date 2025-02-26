const apiKey = "e8a945a7ce1eda1a853f40cb57f9acfc";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric?q=";

const inputBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

checkWeather();
