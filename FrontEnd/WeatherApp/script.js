const apiKey = "e8a945a7ce1eda1a853f40cb57f9acfc";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric?q=bangalore";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);

  var data = await response.json();
}

checkWeather();
