let btn = document.getElementById("main_btn");
let title = document.getElementById("main_title");
btn.addEventListener("click", function () {
  let currentTitle = title.textContent;
  title.textContent = currentTitle.toLocaleUpperCase();
});

/*
let person = {
  height: 175,
  weight: 70,
  age: 30,
  name: "John Doe",
  address: "123 Main St",
  phone: "555-1234",
};

console.error("Error");
console.warn("Warning");
console.info("Info");
console.log("Log");
console.group("Group");
console.groupEnd("Group");
console.table(person);
console.time("Time");
console.timeEnd("Time");
console.count("Count");
*/

// operadores lógicos y de comparación
// OR ||

const conditionOne = true;
const conditionTwo = false;

if (conditionOne || conditionTwo) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// AND &&
if (conditionOne && conditionTwo) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// NOT !
console.log(!conditionTwo);

// ejercicio

/*
  Escribe una función que reciba el precio de un producto y un porcentaje de descuento. La función debe calcular el precio final después de aplicar el descuento solo si es mayor a 0, utilizando if
*/

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let price = document.getElementById("price").value;
  let discount = document.getElementById("discount").value;
  let result = document.getElementById("result");

  let finalPrice = calculateFinalPrice(price, discount);
  result.textContent = `El precio final es: $${finalPrice}`;
});

const calculateFinalPrice = (price, discount) => {
  if (discount > 0) {
    return price - price * (discount / 100);
  }
  return price;
};

// ejercicio
/*
    1. capturar el valor de la tabla a multiplicar
    2. calcular la tabla de multiplicar del 1 al 10 asociada a ese valor
    3. mostrar el resultado en el documento 
*/
const calculateTable = (table) => {
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += `<li>${table} x ${i} = ${table * i}</li>`;
  }
  return result;
};

const tableForm = document.getElementById("table_form");
tableForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let table = document.getElementById("table").value;
  let tableResult = document.getElementById("tableResult");

  let result = calculateTable(table);
  tableResult.innerHTML = `${result}`;
  tableForm.reset();
});
