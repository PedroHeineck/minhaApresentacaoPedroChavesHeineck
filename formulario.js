document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".form__conteudo__formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Criar um objeto para armazenar os dados
    var dados = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };

    // Converter para string JSON
    var dadosString = JSON.stringify(dados);

    // Armazenar no armazenamento local
    localStorage.setItem("formularioData", dadosString);

    // Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

    alert("Formulário enviado com sucesso!");
  });
});
