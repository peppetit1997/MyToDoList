const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskToAdd");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Send a POST request to add the task
    fetch("/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskToAdd: taskText }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the task to the taskList
        const listItem = document.createElement("li");
        listItem.textContent = data.newTask;
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".task-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const label = this.nextElementSibling;

      if (this.checked) {
        label.classList.add("completed");
      } else {
        label.classList.remove("completed");
      }
    });
  });
});
