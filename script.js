let btnSearch = document.getElementById("searchBtn");
btnSearch.addEventListener("click", getWeatherInfo);

function getWeatherInfo() {
  let cityInput = document.getElementById("cityInput").value;

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=28e1a4737df6f2f5fee3c255c18b49ce`;

  fetch(weatherApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      let weatherInfo = document.getElementById("weatherInfo");
      let temperature = parseInt(data.main.temp - 273);
      let description = data.weather[0].description;
      let humidity = data.main.humidity;
      let pressure = data.main.pressure;
      let name = data.name;
      let timezone = data.timezone

      let weatherHtml = `
        <p>City Name: ${name}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Pressure: ${pressure}%</p>
        <p>Timezone: ${timezone}</p>
      `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}