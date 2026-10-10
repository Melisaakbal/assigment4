import { fetchTasks } from "./api.js";
import { Task, TaskManager } from "./taskManager.js";

const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

const manager = new TaskManager();

function render() {
  taskList.innerHTML = "";

  manager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.classList.add("btn-toggle");
    toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn-delete");
    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);
      render();
    });

    btnGroup.appendChild(toggleBtn);
    btnGroup.appendChild(deleteBtn);

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(btnGroup);

    taskList.appendChild(taskDiv);
  });
}

loadTasksBtn.addEventListener("click", async () => {
  statusMessage.textContent = "Loading tasks...";

  try {
    const rawData = await fetchTasks();

    const jsonString = JSON.stringify(rawData);
    const parsedData = JSON.parse(jsonString);

    const taskInstances = parsedData.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    manager.setTasks(taskInstances);
    render();
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Failed to load tasks. Please try again.";
  }
});
import { fetchTasks } from "./api.js";
import { Task, TaskManager } from "./taskManager.js";

const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

const manager = new TaskManager();

function render() {
  taskList.innerHTML = "";

  manager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.classList.add("btn-toggle");
    toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn-delete");
    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);
      render();
    });

    btnGroup.appendChild(toggleBtn);
    btnGroup.appendChild(deleteBtn);

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(btnGroup);

    taskList.appendChild(taskDiv);
  });
}

loadTasksBtn.addEventListener("click", async () => {
  statusMessage.textContent = "Loading tasks...";

  try {
    const rawData = await fetchTasks();

    const jsonString = JSON.stringify(rawData);
    const parsedData = JSON.parse(jsonString);

    const taskInstances = parsedData.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    manager.setTasks(taskInstances);
    render();
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Failed to load tasks. Please try again.";
  }
});
