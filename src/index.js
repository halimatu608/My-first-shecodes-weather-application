let now = new Date();
let element = document.querySelector(`#current-date`);
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

element.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input");
  let displayInput = document.querySelector("#display-input");
  displayInput.textContent = cityInput.value;
}

let form = document.querySelector("#city-form");

form.addEventListener("submit", search);

function showTemperature(response) {
  let temperatureElement = document.querySelector("#present-temperature");
  let cityElement = document.querySelector("#display-input");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  cityElement.innerHTML = city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();

  let cityInputElement = document.querySelector("#city-input");
  let city = cityInputElement.value;
  let key = "df857f64ba3835f3fc76tc53422f3f0o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

console.log(apiUrl);
