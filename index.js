import express from "express";
import bodyParser from "body-parser";

const app = express(); // Create an Express application instance
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); // Parse POST request data

let tasks = []; // Initialize as an empty array

app.get("/", (req, res) => {
  res.render("index", { tasks }); // Pass tasks array to the template
});

app.post("/addTask", (req, res) => {
  const newTaskText = req.body.taskToAdd;
  const taskType = req.body.taskType;

  if (newTaskText && taskType) {
    // Create a new task object based on the task type
    const newTask = { text: newTaskText, isWork: taskType === "work" };

    // Add the task to the tasks array
    tasks.push(newTask);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
