/*  Arreglar:
    1) validateNewCity:
        Validacion (ciudad repetida)
    2) addNewCity:
        Que la ciudad agregada no desaparezca al reiniciar

*/




// variables para mostrar api
var main = document.getElementById("name")
var temp = document.getElementById("temp")
var desc = document.getElementById("description")
var clouds= document.getElementById("clouds")
var card = document.getElementById("card")
var weather = document.getElementById("weather")


//form:
//      botons
var button = document.getElementById("button")//boton select

//      Etiquetas estructura
var cardError= document.getElementById("card-error")//error
var body = document.getElementById("body")
var inputNewCity = document.getElementById("new-city")
var container = document.getElementById("containerForm")

//form-intput
var weatherForm = document.getElementById("selec-city")//form
let newCity = document.getElementById("addCity");//input text
let city = document.getElementById("cities"); //select

//array
var cityList = []
var arrayOptions =[]


//agregar una nueva opcion

function initSelectOptions(){   
    arrayOptions = JSON.parse(localStorage.getItem("JSonOptions"))
    
    if (arrayOptions == null){
        return
    }
    else{
        for (var i = 0; i <= arrayOptions.length; i++){
            
            city.options.add(new Option(arrayOptions[i]))

        }
    }
    return arrayOptions

    /*
    validar si localStorage tiene ciudades cargadas 
    si tiene recorrerlo
    a cda item generar un option dentro del select
    (si no tiene nada)
    */ 
}
initSelectOptions()

function addNewCity(){
    if (validateNewOption()==false){
        cardError.style.display="block"
        container.style.display="none"
    
    } 
    else {
        city.options.add(new Option(newCity.value))
        cityList.push(newCity.value)
        localStorage.setItem("JSonOptions",JSON.stringify(cityList));
        newCity.value = ""
        cardError.style.display="none"
    }
}


//validar que no sea una ciudad repetida

function validateNewOption() {
    arrayOptions =  JSON.parse(localStorage.getItem("JSonOptions",cityList))
    if (arrayOptions.length == 0){
        return false
    }
    for (let i = 0; i <= arrayOptions.length; i++) {
        if (newCity.value === arrayOptions[i]) {
            return false
        }
    }
}


//conexion a la api

async function apiConection() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es`)
        const data = await response.json();
        console.log(data)
        let temperature = data.main.temp;
        let thermalSensation = data.main.feels_like;
        let mainHumidity = data.main.humidity
        let weatherDescription = data.weather[0].description
        let country = data.sys.country
// style
        cardError.style.display="none"
        card.style.display= "block"
        inputNewCity.style.display= "none";

        stylePage();
        
// inner
        main.innerHTML = city.value + " / " + country  ;
        temp.innerHTML =  temperature + "°C";//temperatura
        desc.innerHTML =  "Sensacion Termica: " + thermalSensation + "°C"; //sensacion termica
        clouds.innerHTML =  "Humedad: " + mainHumidity + " %";//humedad
        desc.innerHTML = "Cielo: " + weatherDescription; //descripcion

} catch (error){
    cardError.style.display="block"
    weatherForm.style.display= "none"
    card.style.display ="none"
    console.log(error.message)
}
}


function onSubmit(event) {
    event.preventDefault();
    apiConection()
}


// visibilidad del input text

function viewInput(){
        inputNewCity.style.display= "block";
}


//background dinamico

function stylePage(){
    body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city.value + "')";
}





//eventos

button.addEventListener('click', onSubmit, true); // obtener clima


inputNewCity.addEventListener("keyup", function (event){ // ingresar nueva ciudad atravez de un enter
    if (event.keyCode === 13){
        addNewCity(event = true)
    }
})


