// estructuras de iteración
// for - while - do while
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-------");
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// tabla de multiplicar
// ejercicio
/*
    1. capturar el valor de la tabla a multiplicar
    2. calcular la tabla de multiplicar del 1 al 10 asociada a ese valor
    3. mostrar el resultado en el documento 
*/
const mult = (table) => {
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += `${table} x ${i} = ${table * i}`;
  }
  return result;
};

const tableForm = document.getElementById("table_form");
tableForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let table = document.getElementById("table").value;
  let tableResult = document.getElementById("tableResult");

  let result = calculateTable(table);
  tableResult.textContent = `${result}`;
});
