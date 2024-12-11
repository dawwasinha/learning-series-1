document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete">Delete</button>
    `;

    li.querySelector(".delete").addEventListener("click", () => {
      li.remove();
    });

    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    taskList.appendChild(li);

    taskInput.value = ""; // Clear the input field
  }
}

document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
