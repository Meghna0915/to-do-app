function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
  taskList.appendChild(li);

  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
