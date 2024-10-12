/*
  La programación declarativa se centra en describir qué se debe hacer, en lugar de cómo hacerlo. 
  Ejemplos comunes incluyen SQL para bases de datos y lenguajes de marcado como HTML.
*/
// example 1
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// example 2
// Calcular la suma de los números pares en un array usando métodos de array
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumVal = numbersArr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);

console.log(sumVal); // 30


/*
Ventajas
- Legibilidad: El código es más fácil de leer y entender, ya que se centra en el "qué" en lugar del "cómo".
- Menos Errores: Reduce la posibilidad de errores al minimizar la manipulación del estado y los efectos secundarios.
- Mantenimiento: Facilita el mantenimiento y la modificación del código.
Desventajas
- Rendimiento: Puede ser menos eficiente en términos de rendimiento debido a la abstracción adicional.
- Curva de Aprendizaje: Puede tener una curva de aprendizaje más pronunciada para los desarrolladores acostumbrados a la programación imperativa.
- Limitaciones: No siempre es adecuado para todos los tipos de problemas, especialmente aquellos que requieren un control detallado del flujo de ejecución.
*/