var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
  event.target.parentNode.remove();
});




/*
pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick",function(){ // add evento de dClick
    this.remove(); // com o this, ele seleciona o "dono" do evento.
    /* Um problema q temos é q ao add mais pacientes,
     o adicionado eu não consigo deletar, pq a página não recebe
     esse novo paciente, pois essa info dos pacientes é só
     carregada qndo abrimos a página.
  });
});*/
