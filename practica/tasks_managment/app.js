// seleccionar elementos del dom con getElementById
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// declarar un array vacio donde se van a almacenar las tareas
let tasks = [];

// función para agregar una tarea
function addTask(task) {
  tasks.push({
    text: task,
    completed: false,
  });
  renderTasks();
}

// función para eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1); // Elimina la tarea en la posición 'index'
  renderTasks();
}

// función para marcar una tarea como completada
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed; // Cambia el estado completado
  renderTasks();
}

// función para renderizar las tareas en el dom
function renderTasks() {
  taskList.innerHTML = ""; // Limpiamos la lista antes de renderizar

  // Usamos un bucle para iterar sobre las tareas
  tasks.forEach((task, index) => {
    // Creamos un elemento <li> por cada tarea
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
          <span>${task.text}</span>
          <div>
            <button onclick="toggleTaskCompletion(${index})">${
      task.completed ? "Desmarcar" : "Completar"
    }</button>
            <button class="delete" onclick="deleteTask(${index})">Eliminar</button>
          </div>
        `;

    taskList.appendChild(li);
  });
}

// escuchar evento submit del formulario para agregar una tarea
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que la página se recargue
  const newTask = taskInput.value.trim(); // Obtenemos el valor del input

  if (newTask !== "") {
    addTask(newTask); // Agregar la tarea
    taskInput.value = ""; // Limpiar el campo de texto
  }
});
