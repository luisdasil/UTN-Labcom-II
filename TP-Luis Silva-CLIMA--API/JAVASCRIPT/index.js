

let city = document.getElementById("cities");
let newCity = document.getElementById("newCity");
var main = document.getElementById("name")
var temp = document.getElementById("temp")
var desc = document.getElementById("desc")
var clouds= document.getElementById("clouds")
var weatherApp = document.getElementById("API")
var card = document.getElementById("card")
var weather = document.getElementById("weather")
var card = document.getElementById("card")
var buttonAddCity = document.getElementById("button-add-city")
var cardError= document.getElementById("card-error")

function getWeather() {
    api={
        url:"https://api.openweathermap.org/data/2.5/weather?q=" ,
        key:"&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es"
    }
    .fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es")
        .then((response) => response.json())
        .then(data => {
        city.value = data['name'];
        let temperature = data['main']['temp'];
        let thermalSensation = data['main']['feels_like'];
        let mainHumidity = data['main']['humidity'];
        let weatherDescription = data['weather'][0]['description'];


        weatherApp.style.display = "block";
        main.innerHTML = seleccion.value
        temp.innerHTML =  temperature;
        desc.innerHTML = thermalSensation;
        clouds.innerHTML =  mainHumidity;
        weather.innerHTML = weatherDescription;
    })
    .catch(error => alert("error"))
}


async function apiConection() {
    try {
    await  getWeather();

    let temperature = data['main']['temp'];
    let thermalSensation = data['main']['feels_like'];
    let mainHumidity = data['main']['humidity'];
    let weatherDescription = data['weather'][0]['description'];


    weatherApp.style.display = "block";
    main.innerHTML = seleccion.value
    temp.innerHTML =  temperature;
    desc.innerHTML = thermalSensation;
    clouds.innerHTML =  mainHumidity;
    weather.innerHTML = weatherDescription;
} catch (err) {
    cardError.style.display = "block"
}
}



    // function getWeather(){
//     api={
//         url: 'https://api.openweathermap.org/data/2.5/weather?q=',
//         key:'3936d0749fdc3124c6566ed26cf11978'
//     }
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api.key}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .then(data => {
//         tempValue = data['main']['temp'];
//         city.value = data['name'];
//         descValue = data['weather'][0]['description'];
//         geoLocation = data['coord'] ['sys']
// })
//     if (data.value == 0){
//         API.className += "container-error"
//         card.style.display = "none"
//     }
// }


// class Fetch {
//     async getCurrent(city) {

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api.key}`);
        
//         const data = await response.json();
        
//         console.log(data);
        
//         return data;
//     }
// }


// function changeCity() {
//     city.change(function() {
//         localStorage.setItem('ejemplo', this.value);
//     });
//     if(localStorage.getItem('ejemplo')){
//         $('#mi-select').val(localStorage.getItem('ejemplo'));
//     }
// };
console.log(apiConection())
console.log(getWeather())

function addCity(){

    if(newCity.value != city.option || newCity.value != getWeather(data.name) ){
        localStorage.getItem(city.option)
        localStorage.setItem(city.option.add(newCity.value));

        buttonAddCity.className += "animated__animated animate__fadeOutRightBig animate__delay-2s "
    }
    else{
        card.className = "card-error";
    }

}