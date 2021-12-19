/*  Arreglar:
    1) Home:
        Agregar una pagina cuya funcion sea agregar ciudades y tener la opcion de seleccionar modo oscuro o diurna

    2) addNewCity():
        Programar la funcion para poder agregar opciones al select

    3) animated.css:
        Lograr que las animaciones puedan aparecer
*/




// variables para mostrar api
var main = document.getElementById("name")
var temp = document.getElementById("temp")
var desc = document.getElementById("desc")
var clouds= document.getElementById("clouds")
var card = document.getElementById("card")
var weather = document.getElementById("weather")
var  iconImg = document.getElementById("iconImg")


//form
var button = document.getElementById("button")//boton select
let newCity = document.getElementById("addCity");//input text
var buttonAddCity = document.getElementById("button-add-city")//boton input text
var cardError= document.getElementById("card-error")//error
let city = document.getElementById("cities"); //select
var weatherForm = document.getElementById("selec-city")//form
var cityList = document.getElementById("cityList")
var body = document.getElementById("body")



async function apiConection() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es`)
        const data = await response.json();
        console.log(data)
        let temperature = data.main.temp;
        let thermalSensation = data.main.feels_like;
        let mainHumidity = data.main.humidity
        let weatherDescription = data.weather[0].description
// style
        cardError.style.display="none"
        card.style.display= "inline-block"
       // card.className += "animated__animated animate__fadeInDown animate__delay-5 animate__slow"
        stylePage();
        

// inner
        main.innerHTML = data.name
        temp.innerHTML =  "Temperatura actual: " + temperature + "°C";//temperatura
        desc.innerHTML =  "Sensacion Termica: " + thermalSensation + "°C"; //sensacion termica
        clouds.innerHTML =  "Humedad: " + mainHumidity + " %";//humedad
        weather.innerHTML = weatherDescription; //descripcion

} catch (error){
    cardError.style.display="block"
    weatherForm.style.display= "none"
    card.style.display ="none"
    alert(error.message)
}
}

function onSubmit(event) {
    event.preventDefault();
    apiConection()
}
weatherForm.addEventListener('submit', onSubmit, true);


function validateNewOption(){
    clearErrors(newCity.id);
    var valid = false;

    if(newCity.value != city){
        valid = true
    }
    return valid
    
}


function addNewCity(){
    
    city.options.add(new Option(newCity.value));
    newCity.value=""

}

// displayWeather: function (data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText =
//       "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText =
//       "Wind speed: " + speed + " km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage =
//       "url('https://source.unsplash.com/1600x900/?" + name + "')";
//   }

function stylePage() {
    body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city.value + "')";
    iconImg.src =
        "https://openweathermap.org/img/wn/" + iconImg + ".png";
}