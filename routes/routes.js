const express = require("express");
const Task = require("./models/Task");
const router = express.Router();

// Create a new task
router.post("/", async (req, res) => {
  const { title, description, deadline, priority, user } = req.body;

  try {
    const newTask = new Task({ title, description, deadline, priority, user });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: "Error creating task", error: err });
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: "Error fetching tasks", error: err });
  }
});

// Update a task
router.put("/:id", async (req, res) => {
  const { title, description, deadline, priority } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        deadline,
        priority,
      },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: "Error updating task", error: err });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting task", error: err });
  }
});

module.exports = router;
