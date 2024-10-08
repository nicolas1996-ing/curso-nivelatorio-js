let resultado = document.getElementById("resultado");
let content = "";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let multiplicando = document.getElementById("multiplicando").value;
  let multiplicador = document.getElementById("multiplicador").value;

  for (let i = 0; i <= multiplicador; i++) {
    let valor = multiplicando * i;
    content += `<p>${multiplicando} * ${i} = ${valor}</p>`;
  }

  resultado.innerHTML = content;
});
