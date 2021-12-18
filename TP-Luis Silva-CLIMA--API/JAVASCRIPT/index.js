
let city = document.getElementById("cities"); //select
var weatherForm = document.getElementById("selec-city")//form
var cityList = document.getElementById("cityList")

// variables para mostrar api
var main = document.getElementById("name")
var temp = document.getElementById("temp")
var desc = document.getElementById("desc")
var clouds= document.getElementById("clouds")
var card = document.getElementById("card")
var weather = document.getElementById("weather")

var button = document.getElementById("button")//boton select

let newCity = document.getElementById("addCity");//input text

var buttonAddCity = document.getElementById("button-add-city")//boton input text

var cardError= document.getElementById("card-error")//error


async function apiConection() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es`)
        const data = await response.json();
        console.log(data)
        let temperature = data.main.temp;
        let thermalSensation = data.main.feels_like;
        let mainHumidity = data.main.humidity
        let weatherDescription = data.weather[0].description

        card.style.display= "block"
        card.className += "animated__animated animate__fadeInDown animate__delay-5 animate__slow"
        main.innerHTML = city.value
        temp.innerHTML =  "Temperatura actual: " + temperature + "°C";//temperatura
        desc.innerHTML =  "Sensacion Termica: " + thermalSensation + "°C"; //sensacion termica
        clouds.innerHTML =  "Humedad: " + mainHumidity + " %";//humedad
        weather.innerHTML = weatherDescription; //descripcion
} catch (error){
    cardError.style.display="block"
    alert(error.message)
}
}

function onSubmit(event) {
    event.preventDefault();
    apiConection()
}
weatherForm.addEventListener('submit', onSubmit, true);



function addNewCity(){
    if ((newCity.value != city.options) && (newCity.value = getWeather(data.name))){
        localStorage.getItem(city.options)
        localStorage.setItem(city.option.add(newCity.value))
        buttonAddCity.className += "animated__animated animate__fadeOutRightBig animate__delay-2s "
    }
}