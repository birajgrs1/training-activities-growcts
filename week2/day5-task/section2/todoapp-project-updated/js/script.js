const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.setAttribute("data-theme", "dark");
  darkIcon.classList.remove("hidden");
  lightIcon.classList.add("hidden");
} else {
  body.setAttribute("data-theme", "light");
  lightIcon.classList.remove("hidden");
  darkIcon.classList.add("hidden");
}

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    lightIcon.classList.remove("hidden");
    darkIcon.classList.add("hidden");
    localStorage.setItem("theme", "light");
  }
});

let currentEditingId = null;

function createTask(
  title,
  description,
  startDate,
  endDate,
  status = "start",
  id = null
) {
  return {
    id: id || Date.now(),
    title,
    description,
    startDate,
    endDate,
    status,
  };
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTask(task) {
  const tasks = getTasksFromLocalStorage();
  const existingIndex = tasks.findIndex((t) => t.id === task.id);
  if (existingIndex > -1) {
    tasks[existingIndex] = task;
  } else {
    tasks.push(task);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.getElementById("saveBtn").addEventListener("click", () => {
  const taskId = document.getElementById("task-id").value;
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (!title || !description || !startDate || !endDate) {
    alert("Please fill all fields!");
    return;
  }

  if (new Date(endDate) < new Date(startDate)) {
    alert("End date cannot be before start date!");
    return;
  }

  const existingTask = getTasksFromLocalStorage().find(
    (t) => t.id === Number(taskId)
  );
  const status = existingTask ? existingTask.status : "start";

  const task = createTask(
    title,
    description,
    startDate,
    endDate,
    status,
    taskId ? Number(taskId) : null
  );

  saveTask(task);
  resetForm();
  displayTasks();
});

function resetForm() {
  document.getElementById("form-title").textContent = "Add Todo";
  document.getElementById(
    "saveBtn"
  ).innerHTML = `<i class="fas fa-save mr-2"></i>Add Task`;
  document.querySelector("form").reset();
  currentEditingId = null;
  document.getElementById("task-id").value = "";
}

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.className = `task-item p-4 mb-3 rounded-lg shadow-sm ${
    task.status === "completed" ? "completed-task" : ""
  }`;
  taskElement.setAttribute("draggable", true);
  taskElement.setAttribute("id", task.id);
  taskElement.addEventListener("dragstart", drag);
  taskElement.addEventListener("dragend", () =>
    taskElement.classList.remove("dragging")
  );

  const today = new Date();
  const endDate = new Date(task.endDate);
  const isOverdue = endDate < today && task.status !== "completed";

  taskElement.innerHTML = `
    <div class="task-content">
      <h3 class="font-semibold mb-2">${task.title}</h3>
      <p class="text-sm mb-2">${task.description}</p>
      <div class="date-info text-xs">
        <p>Start: ${formatDate(task.startDate)}</p>
        <p class="${isOverdue ? "overdue" : ""}">Due: ${formatDate(
    task.endDate
  )}</p>
      </div>
    </div>
    <div class="task-actions mt-3 flex justify-end space-x-3">
      <button onclick="editTask(${
        task.id
      })" class="text-blue-500 hover:text-blue-700">
        <i class="fas fa-edit"></i>
      </button>
      <button onclick="deleteTask(${
        task.id
      })" class="text-red-500 hover:text-red-700">
        <i class="fas fa-trash"></i>
      </button>
      ${
        task.status !== "completed"
          ? `
      <button onclick="markAsCompleted(${task.id})" class="text-green-500 hover:text-green-700">
        <i class="fas fa-check"></i>
      </button>`
          : ""
      }
    </div>
  `;

  return taskElement;
}

function displayTasks() {
  const columns = document.querySelectorAll(".task-column");
  columns.forEach((column) => {
    column.innerHTML = `<h2 class="font-bold text-xl mb-4">${
      column.id.charAt(0).toUpperCase() + column.id.slice(1)
    }</h2>`;
  });

  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => {
    const column = document.getElementById(task.status);
    if (column) column.appendChild(createTaskElement(task));
  });

  document.querySelectorAll(".task-column").forEach((column) => {
    if (column.children.length === 1) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-state";
      emptyState.textContent = "[]";
      column.appendChild(emptyState);
    }
  });
}

function editTask(taskId) {
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    document.getElementById("form-title").textContent = "Edit Todo";
    document.getElementById(
      "saveBtn"
    ).innerHTML = `<i class="fas fa-save mr-2"></i>Update Task`;
    document.getElementById("task-id").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("start-date").value = task.startDate;
    document.getElementById("end-date").value = task.endDate;
    currentEditingId = task.id;
  }
}

function deleteTask(taskId) {
  if (!confirm("Are you sure you want to delete this task?")) return;
  const tasks = getTasksFromLocalStorage().filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function markAsCompleted(taskId) {
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.status = "completed";
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.target.classList.add("dragging");
}

function drop(ev) {
  ev.preventDefault();
  const taskId = ev.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(taskId);
  const targetColumn = ev.target.closest(".task-column");

  if (targetColumn && draggedElement) {
    const taskId = parseInt(draggedElement.id);
    const newStatus = targetColumn.id;

    const tasks = getTasksFromLocalStorage();
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex > -1) {
      tasks[taskIndex].status = newStatus;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    }
  }
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

window.onload = () => {
  displayTasks();
  document.querySelectorAll(".task-column").forEach((column) => {
    column.addEventListener("dragover", allowDrop);
    column.addEventListener("drop", drop);
  });
};
