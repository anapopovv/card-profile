var valoresOriginais = {};

function editar() {
  valoresOriginais.nome = document.getElementById("nome").textContent;
  valoresOriginais.username = document.getElementById("username").textContent;
  valoresOriginais.skills = document.getElementById("number-skills").textContent;
  valoresOriginais.projects = document.getElementById("number-projects").textContent;
  valoresOriginais.coffees = document.getElementById("number-coffees").textContent;
  valoresOriginais.insta = document.getElementById("insta").textContent;
  valoresOriginais.whats = document.getElementById("whats").textContent;
  valoresOriginais.git = document.getElementById("git").textContent;

  var elements = document.querySelectorAll('.editable');
  elements.forEach(function(element) {
    element.contentEditable = true;
  });
}

function salvar() {
  var nome = document.getElementById("nome").textContent;
  var username = document.getElementById("username").textContent;
  var skills = document.getElementById("number-skills").textContent;
  var projects = document.getElementById("number-projects").textContent;
  var coffees = document.getElementById("number-coffees").textContent;
  var insta = document.getElementById("insta").textContent;
  var whats = document.getElementById("whats").textContent;
  var git = document.getElementById("git").textContent;

  localStorage.setItem("nome", nome);
  localStorage.setItem("username", username);
  localStorage.setItem("skills", skills);
  localStorage.setItem("projects", projects);
  localStorage.setItem("coffees", coffees);
  localStorage.setItem("insta", insta);
  localStorage.setItem("whats", whats);
  localStorage.setItem("git", git);
        
  alert("Alterações salvas! :)");

  var elements = document.querySelectorAll('.editable');
  elements.forEach(function(element) {
    element.contentEditable = false;
  });
} 