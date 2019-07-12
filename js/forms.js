var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function() {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  //Extraindo informações do paciente do form
  var nome = form.nome.value; // value, pq a entrada é do usuário.
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  // Cria a tr e a td
  var pacienteTr = document.createElement("tr");
  console.log(pacienteTr);

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd); //adicionei na tag <tr> as tags <td>
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  // Adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);


});
