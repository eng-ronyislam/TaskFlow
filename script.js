const taskInput = document.querySelector(".task-input");
const taskForm = document.querySelector("form");
const taskList = document.querySelector(".task-list");

const warningMessage = document.querySelector(".warning-message");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value;
  if (taskText.trim() === "") {
    warningMessage.style.display = "block";
    return;
  }
   const taskCard = document.createElement("div");
  taskCard.classList.add("tasklistcard");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  taskCard.appendChild(checkbox);
  taskCard.appendChild(taskSpan);

  taskList.appendChild(taskCard);

  taskInput.value = "";

  warningMessage.style.display = "none";
});
