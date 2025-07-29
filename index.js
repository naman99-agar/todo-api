const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.send('Welcome to Naman’s Todo API!');
    res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index].task = req.body.task;
    res.json(todos[index]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
