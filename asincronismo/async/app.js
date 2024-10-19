/*
  async: Declara una función asincrónica que siempre devuelve una promesa.
  await: Pausa la ejecución de la función asincrónica hasta que la promesa se resuelva o rechace.
  try...catch: Se utiliza para manejar errores de manera efectiva en funciones asincrónicas, similar a cómo se manejan los errores en el código síncrono.

  Promesas (Promise): Objetos que representan la eventual finalización de una operación asincrónica. Se manejan con .then(), .catch(), y .finally().
  await: Pausa la ejecución de una función async hasta que una promesa se resuelva o rechace. Proporciona una sintaxis más limpia y legible para manejar operaciones asincrónicas.
*/

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve({
          name: "nicolas",
          age: 25,
        });
      }, 2000);
    } else {
      reject(new Error("Test error"));
    }
  });
};

const doSomethingAsyncTwo = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve({
          name: "alejandra",
          age: 29,
        });
      }, 10000);
    } else {
      reject(new Error("Test error"));
    }
  });
};

const resolvePromise = async () => {
  try {
    const resOne = await doSomethingAsync(); // Pausa la ejecución de la función asincrónica hasta que la promesa se resuelva o rechace.
    const resTwo = await doSomethingAsyncTwo();

    console.log(resTwo);
    console.log(resOne);
  } catch (error) {
    console.error(error);
  }
};

resolvePromise();
console.log(1 + 1);
