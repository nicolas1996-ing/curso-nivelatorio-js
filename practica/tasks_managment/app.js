// leer los elementos del dom ( document object modelo == hmtl)
const taskForm = document.getElementById("taskForm"); // form
const taskInput = document.getElementById("taskInput"); // input
const taskList = document.getElementById("taskList"); // lista 

let tasks = []; // inicializar la lista como un array vacio 

// funcion para agregar tareas a la lista
// task = { text: string, completed: boolean }
// llama a la funcion renderTasks();
function addTask(task) {
  tasks.push({
    text: task,
    completed: false,
  });
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1); 
  renderTasks();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// 
function renderTasks() {
  taskList.innerHTML = ""; // 

  tasks.forEach((task, index) => {
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

taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que la página se recargue
  const newTask = taskInput.value.trim(); 

  if (newTask !== "") {
    addTask(newTask); 
    taskInput.value = ""; 
  }
});
