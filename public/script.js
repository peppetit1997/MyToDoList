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
