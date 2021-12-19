var inputPesos = document.getElementById("pesos");
var selectMoneda = document.getElementById("moneda");

var botoncit = document.querySelector("button#calc");

var cotizaciones = {
  dolares: 105.75,
  euros: 120.5,
};

function alertError(inputId) {
  var inputWithErrors = document.getElementById(inputId);
  inputWithErrors.className = "error";
}

function clearErrors(inputId) {
  var inputWithErrors = document.getElementById(inputId);
  inputWithErrors.className = "";
}

function validate() {
  clearErrors(inputPesos.id);
  if (!Number(inputPesos.value)) {
    alertError(inputPesos.id);
    return false;
  }
  return true;
}

function displayResult(result) {
  var tit = document.querySelector("h3");
  tit.innerText = "$ " + result.toFixed(2);
}

botoncit.onclick = function () {
  if (validate()) {
    var valorPesos = Number(inputPesos.value);
    var valorMoneda = Number(cotizaciones[selectMoneda.value]);

    var precioFinal = valorPesos * valorMoneda;
    displayResult(precioFinal);
  } else {
    alert("todo mal");
  }
};

// monedas
var inputNombre = document.getElementById("nombre");
var inputValor = document.getElementById("valor");

var botoncitNuevaMoneda = document.querySelector("button#nuevaMoneda");

function validateNewCoin() {
  clearErrors(inputNombre.id);
  clearErrors(inputValor.id);

  var valid = true;

  if (!inputNombre.value) {
    // nombre no valido
    alertError(inputNombre.id);
    valid = false;
  }
  if (!Number(inputValor.value)) {
    // valor no valido
    alertError(inputValor.id);
    valid = false;
  }
  return valid;
}

botoncitNuevaMoneda.onclick = function () {
  if (validateNewCoin()) {
    // get values
    var nombreMoneda = inputNombre.value;
    var valorMoneda = Number(inputValor.value);

    // add option to select
    selectMoneda.options.add(new Option(nombreMoneda, nombreMoneda));

    cotizaciones[nombreMoneda] = valorMoneda;

    // reset inputs
    inputNombre.value = "";
    inputValor.value = "";
  } else {
    alert("algo salio mal");
  }
};
