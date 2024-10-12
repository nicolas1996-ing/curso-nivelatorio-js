/*
    La programación funcional se centra en el uso de funciones puras y evita el estado mutable y los efectos secundarios.
*/
// example 1
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const result = multiply(add(2, 3), add(4, 5));
// multiply(5,9) = 45
console.log(result); // 45
console.log(multiply(10, 10));
console.log(multiply(10, 10));
console.log(multiply(10, 10));
console.log(multiply(10, 10));
console.log(multiply(10, 10));
console.log(multiply(10, 10));
console.log(multiply(10, 10));

// example 2
// Función pura para calcular el factorial de un número
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

const numbers = [1, 2, 3, 4, 5];
console.log(factorial(5)); // 120

/*
Ventajas
- Inmutabilidad: Promueve la inmutabilidad y evita los efectos secundarios, lo que puede llevar a un código más predecible y menos propenso a errores.
- Reutilización de Código: Facilita la reutilización de código a través de funciones puras y composición de funciones.
- Paralelismo: Facilita la programación concurrente y paralela debido a la ausencia de estado mutable.
Desventajas
- Rendimiento: Puede ser menos eficiente en términos de rendimiento debido a la creación de nuevas estructuras de datos en lugar de modificar las existentes.
- Curva de Aprendizaje: Puede tener una curva de aprendizaje más pronunciada para los desarrolladores acostumbrados a la programación imperativa o POO.
- Legibilidad: El uso extensivo de funciones anidadas y composición de funciones puede hacer que el código sea difícil de leer y entender para algunos desarrolladores.
*/
