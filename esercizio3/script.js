function generaElenco() {
  let s = "";
  s += "<ul>\n";
  for (let i = 0; i < 10; i++) {
    s += "<li> item numero: " + i + "<li>\n";
  }
  s += "</ul>\n";
  console.log(s)
}
generaElenco();