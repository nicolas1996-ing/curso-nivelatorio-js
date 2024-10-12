/*
  La programación imperativa se centra en describir cómo se debe realizar una tarea mediante una secuencia de instrucciones.
*/
// example 1
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);


// example 2	
// Calcular la suma de los números pares en un array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumVal = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumVal += numbers[i];
  }
}
console.log(sumVal); // 30

/*
Ventajas
- Simplicidad: Es fácil de entender y seguir, ya que se basa en una secuencia de instrucciones claras y directas.
- Control Completo: Ofrece un control detallado sobre el flujo de ejecución del programa.
- Eficiencia: Puede ser más eficiente en términos de rendimiento, ya que permite optimizar el uso de recursos.
Desventajas
- Complejidad en Programas Grandes: Puede volverse difícil de mantener y entender en programas grandes y complejos.
- Propenso a Errores: La manipulación directa del estado y el uso de variables globales pueden llevar a errores difíciles de detectar.
- Menos Modularidad: Tiende a tener menos modularidad y reutilización de código en comparación con otros paradigmas.
*/