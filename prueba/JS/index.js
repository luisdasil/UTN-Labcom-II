/* variable para Cantidad de kWh usados */

var kWh = document.getElementById("kWh");


/*Constante del iva recidencia e industrial*/

let ivaResidencial = 21;
let ivaIndustrial = 27;

/*Constante de la tarifa */

let precioCentro = 5.80;
let precioZur = 5.40;
let precioOeste = 5.35;
let precioNorte = 5.60;

/*Funcion para el calculo industrial*/

function calcular_industrial(kWh, ivaIndustrial, precioCentro, precioZur, precioOeste, precioNorte){
    var total=0
    if (document.getElementById("Distrito-Centro")){
        total = kWh * precioCentro;
        total = (total * ivaIndustrial) / 100;
    }
    if (document.getElementById("Distrito-Zur")){
        total = kWh * precioZur;
        total = (total * ivaIndustrial) / 100;
    }
    if (document.getElementById("Distrito-Oeste")){
        total = kWh * precioOeste;
        total = (total * ivaIndustrial) / 100;
    }
    if (document.getElementById("Distrito-Norte")){
        total = kWh * precioNorte;
        total = (total * ivaIndustrial) / 100;
    }
}

/*Funcion para el calculo recidencial*/

function calcular_recidencial(kWh, ivaResidencial, precioCentro, precioZur, precioOeste, precioNorte){
    var total=0
    if (document.getElementById("Distrito-Centro")){
        total = kWh * precioCentro;
        total = (total * ivaResidencial) / 100;
        alert("Total")
    }
    if (document.getElementById("Distrito-Zur")){
        total = kWh * precioZur;
        total = (total * ivaResidencial) / 100;
        alert("total")
    }
    if (document.getElementById("Distrito-Oeste")){
        total = kWh * precioOeste;
        total = (total * ivaResidencial) / 100;
        alert("total")
    }
    if (document.getElementById("Distrito-Norte")){
        total = kWh * precioNorte;
        total = (total * ivaResidencial) / 100;
        alert("total")
    }
}




/*
Validacion formulario
*/

function validateForm() {
    if (!(document.getElementById('radio-1').checked) && !(document.getElementById('radio-2').checked)) {
        alert("Seleccione tipo de usuario");
        return false;
    }


    if(document.getElementById('domicilio').value == 'default') {
        alert("Seleccione un distrito");
        return false;
    }
    

    if(document.getElementById('kWh').value <= 0) {
        alert("Ingrese un valor de consumo valido");
        return false;
    }
}
