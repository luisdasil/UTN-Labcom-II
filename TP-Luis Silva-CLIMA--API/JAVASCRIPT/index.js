

let city = document.getElementById("cities");
let newCity = document.getElementById("addCity");
var main = document.getElementById("name")
var temp = document.getElementById("temp")
var desc = document.getElementById("desc")
var clouds= document.getElementById("clouds")
var card = document.getElementById("card")
var weather = document.getElementById("weather")
var card = document.getElementById("card")
var buttonAddCity = document.getElementById("button-add-city")
var cardError= document.getElementById("card-error")

city = ["Rosario", "Brazilia", "NuevaYork", "Tokio"]

function getWeather() {
    api={
        url:"api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=453fda7f094eec07c9612eedaac172e6&units=metric&lang=es"
    }
    fetch(`${api.url}`)
        .then((cityStorage) => cityStorage.json())
        .then(data => {
        city.value = data['name'];
        let temperature = data['main']['temp'];
        let thermalSensation = data['main']['feels_like'];
        let mainHumidity = data['main']['humidity'];
        let weatherDescription = data['weather'][0]['description'];


        
        main.innerHTML = city.value
        temp.innerHTML =  temperature;
        desc.innerHTML = thermalSensation;
        clouds.innerHTML =  mainHumidity;
        weather.innerHTML = weatherDescription;
    })
    .catch(error => alert("error"))
}




async function apiConection() {
    try {
    var weather = await  getWeather();

    let temperature = data['main']['temp'];
    let thermalSensation = data['main']['feels_like'];
    let mainHumidity = data['main']['humidity'];
    let weatherDescription = data['weather'][0]['description'];


    main.innerHTML = seleccion.value
    temp.innerHTML =  temperature;
    desc.innerHTML = thermalSensation;
    clouds.innerHTML =  mainHumidity;
    weather.innerHTML = weatherDescription;
} catch (error) {
    console.log("error")
}
}



    // function getWeather(){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api.key}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .then(data => {
//          let temperature = data['main']['temp'];
            // let thermalSensation = data['main']['feels_like'];
            // let mainHumidity = data['main']['humidity'];
            // let weatherDescription = data['weather'][0]['description'];
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
console.log(main)


function addNewCity(){

    if(newCity.value != city.option || newCity.value != getWeather(data.name) ){
        localStorage.getItem(city.options)

        localStorage.setItem(city.options.add(new Option(document.getElementById("addCity").value)))

        buttonAddCity.className += "animated__animated animate__fadeOutRightBig animate__delay-2s "
    }
    else{
        card.className = "card-error";
    }

}