let counter = 10;
if (counter > 5) {
  console.log("counter es mayor a 5");
} else {
  console.log("counter es menor o igual a 5");
}

counter > 5
  ? console.log("counter es mayor a 5")
  : console.log("counter es menor o igual a 5");

// funcion sin retorno
function gretting() {
  console.log("hola a todos");
}
gretting();

// funcion con retorno
function grettingWithName(name) {
  return name.split("");
}
const resultGrettingWithName = grettingWithName("javier");
console.log(resultGrettingWithName);

function add(num1, num2) {
  const result = num1 + num2;
  return `el resultado de la suma de ${num1} y ${num2} es igual a: ${result}`;
}

const r1 = add(10, 10);
const r2 = add(10, 11);
const r3 = add(1, 10);

console.log({ r1, r2, r3 });

// funciones flecha

// let add = (num1, num2) => num1 + num2;
let add = (num1, num2) => {
  return num1 + num2;
};
const r4 = add(1, 2);
console.log({ r4 });

// flecha sin argumentos
// const printHelloWorld = () => console.log("hola sin argumentos");
const printHelloWorld = () => {
  console.log("hola sin argumentos");
};
printHelloWorld();

// autoejecutable
(() => console.log("autoejecutable"))();
(() => {
  console.log("autoejecutable 2");
})();
(function () {
  console.log("autoejecutable 3");
})();

//
const fan = {
  brand: "home elements",
  color: "black",
  speed: 3,
  weight: 3000,
  description: function () {
    console.log(
      `el ventilador de marca ${this.brand} tiene ${this.speed} velocidadades`
    );
  },
};

fan.description();

//
const add2 = (a = 0, b = 0) => {
  console.log({ a, b });
  return a + b;
};
const r5 = add2(undefined, 10);
console.log({ r5 });
//

const evalArr = (num, arr = []) => {
  let results = [];
  let numAdd = false;
  for (let i = 0; i < arr.length; i++) {
    let currentNumberArr = arr[i];
    if (currentNumberArr > num && numAdd == false) {
      results.unshift(num);
      results.push(currentNumberArr);
      numAdd = true;
    } else if (currentNumberArr == num) {
      results.push(currentNumberArr);
    } else {
      results.push(currentNumberArr);
    }
  }

  if (numAdd == false) {
    results.push(num);
  }
  return results;
};

const sortArr = (numbers, newArr) => {
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (i == 0) {
      newArr.push(currentNumber);
    } else {
      newArr = evalArr(currentNumber, newArr);
    }
  }
  return newArr;
};

const numbers = [9, 8, 5, 6, 1, 1];
const newArr = [];
const sortResult = sortArr(numbers, newArr);
console.log(sortResult);
