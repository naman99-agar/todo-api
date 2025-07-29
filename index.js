const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.send('Welcome to Naman’s Todo API! /todos');
    res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task };
  todos.push(newTodo);git
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
  
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
  
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;
  
    res.json(todo);
  });
  

  app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
  
    if (index === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }
  
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' });
  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
