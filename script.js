// script.js
document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    mensagem.textContent = "E-mail válido!";
    mensagem.className = "success";
  } else {
    mensagem.textContent = "Por favor, insira um e-mail válido no formato exemplo@dominio.com";
    mensagem.className = "error";
  }
});
