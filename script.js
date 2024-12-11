document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
  // Code here..
  
}

document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
