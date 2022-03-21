let now = new Date();
let h4 = document.querySelector ("h4");


let wdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = wdays[now.getDay ()];
let hours = now.getHours ();
if (hours < 10) {hours = `0${hours}`;}
let minutes = now.getMinutes();
if (minutes < 10) {minutes = `0${minutes}`;}

h4.innerHTML = `${day} ${hours}:${minutes}`;


function showTemperature(response){
//console.log(response);
document.querySelector ("#city").innerHTML = response.data.name;
document.querySelector ("#maintemperature").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#feels-like").innerHTML = Math.round(response.data.main.feels_like);
document.querySelector("#description").innerHTML = response.data.weather[0].main;
  }

function searchCity(city) {
let apiKey = "9078bdda44af2b0743ddeae89e1d419b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then (showTemperature);

}

function formSearch (event){
  event.preventDefault();
let city = document.querySelector("#search-input").value;
searchCity(city);
}

function searchLocation(position) {
  let apiKey = "9078bdda44af2b0743ddeae89e1d419b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then (showTemperature);
}

function getCurrentLocation(event){
    event.preventDefault();
  navigator.geolocation.getCurrentPosition (searchLocation);

}


let searchform = document.querySelector("#form-search");
searchform.addEventListener("submit", formSearch);

let currentLocation = document.querySelector("#currentlocation");
currentLocation.addEventListener("click",getCurrentLocation);
searchCity("Sydney");

  //HERE I'M GOING TO CREATE A API CALL TO OPEN THE WEATHER
//ONCE I HAVE THE RESPONSE WE DISPLAY CITY NAME AND TEMPERATURE
//let searchInput = document.querySelector("#search-input");
//let h1 = document.querySelector("h1");
//h1.innerHTML = `${searchInput.value}`;

//let apiKey = "9078bdda44af2b0743ddeae89e1d419b";
//let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;

//function showTemp (response){
//console.log(response.data.main.temp);
//let realTemperature = Math.round(response.data.main.temp);
//let mainTemperature = document.querySelector("#maintemperature");
//mainTemperature.innerHTML = `${realTemperature}`;

//function position (showPosition){
  //console.log (showPosition.coords.latitude);
//}
//navigator.geolocation.getCurrentPosition(position)
//}

//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);

//}

//function convertFahrenheit(event){
  //event.preventDefault();
 //let temperatureElement = document.querySelector ("#maintemperature");
//temperatureElement.innerHTML = 66;
//}

//function convertCelsius(event){
  //event.preventDefault();
   //let temperatureElement = document.querySelector ("#maintemperature");
//temperatureElement.innerHTML = 19;

//}

//let fahrenheitTemp = document.querySelector ("#fahrenheit-temp");
//fahrenheitTemp.addEventListener("click", convertFahrenheit);

//let celsiusTemp = document.querySelector ("#celsius-temp");
//celsiusTemp.addEventListener("click", convertCelsius);