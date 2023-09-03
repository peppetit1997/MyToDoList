import express from "express";
import bodyParser from "body-parser";

const app = express(); // Create an Express application instance
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); // Parse POST request data

let tasks = []; // Array to store tasks

app.get("/", (req, res) => {
  res.render("index", { tasks }); // Pass tasks array to the template
});

app.post("/addTask", (req, res) => {
  const newTask = req.body.taskToAdd; // Get the task from the form data
  if (newTask) {
    tasks.push(newTask); // Add the task to the tasks array
  }
  res.redirect("/"); // Redirect back to the homepage
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
