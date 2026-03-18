function generaElenco() {
  let s = "";
  s += "<ul>\n";
  for (let i = 0; i < 10; i++) {
    s += "<li> item numero: " + i + "<li>\n";
  }
  s += "</ul>\n";
  return s;
}

const elenco = document.getElementById("prova");
elenco.innerHTML = generaElenco();
