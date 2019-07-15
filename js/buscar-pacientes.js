var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load",function(){

    var erroAjax = document.querySelector("#erro-ajax")

    // Validando os erros com os códigos (no caso o 200 é tudo ok).
    if (xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      // Passar uma string para objetivo array no JavaScript.
      var pacientes = JSON.parse(resposta);

      // percorre o array de pacientes e adiciona cada um deles
      pacientes.forEach(function(paciente){
        adicionarPacienteNaTabela(paciente);
      });
    }else{
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();

});
