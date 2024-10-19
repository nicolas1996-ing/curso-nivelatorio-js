/*
   Clases: Una clase es una plantilla para crear objetos. 
   Define las propiedades y métodos que los objetos creados a partir de la clase tendrán.
*/
class Task {
  /*
    Constructores: Un método especial dentro de una clase que se llama automáticamente cuando se crea una nueva instancia de la clase. 
    Se utiliza para inicializar las propiedades del objeto.
  */
  constructor(text) {
    /* this.text = text; inicializa la propiedad text del objeto con el valor pasado como argumento. */
    this.text = text;
    this.completed = false;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskList = document.getElementById("taskList");
  }

  /*
    Métodos: Funciones definidas dentro de una clase que describen 
    los comportamientos de los objetos creados a partir de la clase.
  */
  addTask(task) {
    this.tasks.push(task);
    this.renderTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.renderTasks();
  }

  toggleTaskCompletion(index) {
    this.tasks[index].toggleCompletion();
    this.renderTasks();
  }

  renderTasks() {
    this.taskList.innerHTML = "";
    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
      li.textContent = task.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList = "btn-delete";
      deleteBtn.onclick = () => this.deleteTask(index);

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = task.completed ? "Undo" : "Complete";
      toggleBtn.onclick = () => this.toggleTaskCompletion(index);

      li.appendChild(deleteBtn);
      li.appendChild(toggleBtn);
      this.taskList.appendChild(li);
    });
  }
}

/* se utiliza para ejecutar una función cuando el documento HTML ha sido completamente cargado y parseado por el navegador */
document.addEventListener("DOMContentLoaded", () => {
  /*
    Objetos: Una instancia de una clase. 
    Los objetos son entidades que tienen propiedades y comportamientos definidos por su clase.
  */
  const taskManager = new TaskManager();
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = new Task(taskText);
      taskManager.addTask(task);
      taskInput.value = "";
    }
  });
});

/*
  Clases: Plantillas para crear objetos.
  Objetos: Instancias de clases.
  Constructores: Inicializan las propiedades de los objetos.
  Métodos: Definen comportamientos de los objetos.
*/
