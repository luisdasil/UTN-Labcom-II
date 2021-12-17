

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



// function getWeather() {
//     api={
//         url:"api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=453fda7f094eec07c9612eedaac172e6&units=metric&lang=es"
//     }
//     fetch(`${api.url}`)
//         .then((response) => response.json())
//         .then(data => {
//         let temperature = data['main']['temp'];
//         let thermalSensation = data['main']['feels_like'];
//         let mainHumidity = data['main']['humidity'];
//         let weatherDescription = data['weather'][0]['description']     

//         main.innerHTML = city.value;
//         temp.innerHTML =  temperature;
//         desc.innerHTML = thermalSensation;
//         clouds.innerHTML =  mainHumidity;
//         weather.innerHTML = weatherDescription;
//     })
//     .catch(error => alert("error"))
// }




async function apiConection(city) {
    try {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q="${city.value}&appid=453fda7f094eec07c9612eedaac172e6&units=metric&lang=es`)
        const data = await response.json();
        console.log(data)
        let temperature = data['main']['temp'];
        let thermalSensation = data['main']['feels_like'];
        let mainHumidity = data['main']['humidity'];
        let weatherDescription = data['weather'][0]['description']

        card.style.display= 'block'
        main.innerHTML = city.value;
        temp.innerHTML =  temperature;
        desc.innerHTML = thermalSensation;
        clouds.innerHTML =  mainHumidity;
        weather.innerHTML = weatherDescription;

} catch (error) {
    console.log("error")
}
}

function onSubmit(event) {
    event.preventDefault();
    apiConection(city.value)
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





city = ["Rosario", "Brazilia", "NuevaYork", "Tokio"]

function addNewCity(){


        localStorage.getItem(city.options)

        localStorage.setItem(city.option.add(newCity.value))

        buttonAddCity.className += "animated__animated animate__fadeOutRightBig animate__delay-2s "
    

}