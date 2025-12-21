const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const priorityInput = document.getElementById("priorityInput");
const list = document.getElementById("list");
const emptyState = document.getElementById("emptyState");
const countTotal = document.getElementById("countTotal");
const countCompleted = document.getElementById("countCompleted");
const themeToggle = document.getElementById("themeToggle");

let tasks = [];
let filter = "all";

document.getElementById("addBtn").addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({
    id: Date.now(),
    text,
    completed: false,
    date: dateInput.value,
    priority: priorityInput.value
  });

  taskInput.value = "";
  renderTasks();
});

function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  emptyState.hidden = filteredTasks.length !== 0;

  filteredTasks.forEach(task => {
    const item = document.createElement("div");
    item.className = `list-group-item ${task.completed ? "done" : ""}`;

    item.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <strong>${task.text}</strong>
        <small class="text-muted">(${task.priority})</small>
      </div>
      <div>
        <button class="btn btn-sm btn-warning">✏️</button>
        <button class="btn btn-sm btn-danger">🗑️</button>
      </div>
    `;

    item.querySelector("input").addEventListener("change", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    item.querySelector(".btn-warning").addEventListener("click", () => {
      const newText = prompt("Edit task", task.text);
      if (newText) task.text = newText;
      renderTasks();
    });

    item.querySelector(".btn-danger").addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id);
      renderTasks();
    });

    list.appendChild(item);
  });

  countTotal.textContent = tasks.length;
  countCompleted.textContent = tasks.filter(t => t.completed).length;
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderTasks();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
