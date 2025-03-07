const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [{ id: 1, username: "user", password: "pass" }];

let tasks = [];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, user: { id: user.id, username: user.username } });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter((task) => task.id !== id);
  res.json({ success: true });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));