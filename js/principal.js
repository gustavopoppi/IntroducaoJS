var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < 5 ; i++){

  var paciente = pacientes[i];

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;


  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;


  var tdImc = paciente.querySelector(".info-imc");

  alturaEhVerdadeira = true;
  pesoEhVerdadeiro = true;


  if (peso <= 0 || peso >= 500){
    tdImc.textContent = "Peso inválido!"
    pesoEhVerdadeiro = false;
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3){
    tdImc.textContent = "Altura inválida";
    alturaEhVerdadeira = false;
    paciente.classList.add("paciente-invalido");
  }
  if (alturaEhVerdadeira && pesoEhVerdadeiro) {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
  }
}
