/*
  ¿ Qué es la asincronía ?
  La asincronía en JavaScript permite que el código se ejecute sin bloquear el hilo principal. 
  Esto es crucial para operaciones que pueden tardar un tiempo en completarse, como solicitudes de red, lectura de archivos, o temporizadores. 
  La asincronía mejora la eficiencia y la capacidad de respuesta de las aplicaciones.

  ¿ Promesas ?
  Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
  Son una de las principales herramientas para manejar operaciones asincrónicas de manera más estructurada y legible.
  Las promesas proporcionan una forma de manejar estas operaciones asincrónicas, permitiendo que el código continúe ejecutándose mientras se espera que la operación asincrónica se complete.
*/

// Simulación de una operación asincrónica usando una promesa
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      reject(data); // La promesa se cumple con los datos
    }, 2000);
  });
};

// Uso de la promesa para manejar la operación asincrónica
fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("Fetching data...");
console.log(2 * 2);
console.log(2 * 2);
console.log(2 * 2);
console.log(2 * 2);

// rest-countries-api
/*
  postman: open-weather-api 
  api: https://openweathermap.org/current
  lat,long: https://latitude.to/map/co/colombia/cities/pereira
  lat,lon = 4.824878019867418, -75.75850253022448
*/

/*
  postman: gyphy-api
  api: https://developers.giphy.com/dashboard/
*/
