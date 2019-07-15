var campoFiltro = document.querySelector("#filtrar-tabela"); // selecionando o campo de input

campoFiltro.addEventListener("input",function(){
  console.log(campoFiltro.value);

  var pacientes = document.querySelectorAll(".paciente") // Criei array dos pacientes

  // esse 1º if é para validar quando não tiver nada digitado, ele volta os nomes ao normal.
  if (this.value.length > 0) {
     for (var i = 0; i < pacientes.length; i++) {
       var paciente = pacientes[i];
       // Adicionando ao tdNome o objeto paciente com a classe info-nome
       var tdNome = paciente.querySelector(".info-nome");
       var nome = tdNome.textContent;

       var expressao = new RegExp(this.value,"i");

       if (expressao.test(nome)) {
           paciente.classList.remove("invisivel");
       } else {
           paciente.classList.add("invisivel");
       }
     }
  }else{
      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
      }
  }
});
