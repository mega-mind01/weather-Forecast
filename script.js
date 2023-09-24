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
      let temperature = data.main.temp;
      let description = data.weather[0].description;
      let humidity = data.main.humidity;

      let weatherHtml = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
      `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}