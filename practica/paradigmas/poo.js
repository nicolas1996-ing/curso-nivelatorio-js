/*
  La POO se centra en la creación de objetos que contienen tanto datos como métodos. 
  Los objetos son instancias de clases, que actúan como plantillas.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.

// example 2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// herencia
// extends se utiliza para crear una subclase que hereda de una clase padre, permitiendo la reutilización y extensión del comportamiento de la clase padre.
class Student extends Person {
  // la palabra clave super se utiliza para llamar al constructor de la clase padre desde una clase hija
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student('Alice', 20, 'A');
student.greet(); // Hello, my name is Alice and I am 20 years old.
student.study(); // Alice is studying.
student.name; // Alice
student.age; // 20

/*
Ventajas
- Reutilización de Código: Facilita la reutilización de código a través de la herencia y el polimorfismo.
- Modularidad: Promueve la modularidad y la organización del código en clases y objetos.
- Mantenimiento: Facilita el mantenimiento y la extensión del código al encapsular datos y comportamientos.
Desventajas
- Complejidad: Puede añadir complejidad innecesaria a programas simples.
- Rendimiento: Puede ser menos eficiente en términos de rendimiento debido a la sobrecarga de la creación y gestión de objetos.
- Curva de Aprendizaje: Puede tener una curva de aprendizaje más pronunciada para los desarrolladores nuevos en el paradigma.
*/