const express = require('express');
const cors = require('cors');
const { Task } = require('./models/task');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  await task.update(req.body);
  res.json(task);
});

app.delete('/api/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  await task.destroy();
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`🚀 To-Do API running on http://localhost:${port}`);
});
