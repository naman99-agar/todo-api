const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const app = express();
const port = process.env.PORT || 4800;


const DATA_FILE = 'todos.json';

app.use(cors());
app.use(express.json());

// Helper: read todos from file
async function readTodos() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper: write todos to file
async function writeTodos(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2));
}

// Create Todo
// Create Todo with date
app.post('/todos', async (req, res) => {
    const todos = await readTodos();
    const newTodo = {
      id: Date.now(),
      task: req.body.task,
      date: req.body.date || new Date().toISOString().split('T')[0] // YYYY-MM-DD
    };
    todos.push(newTodo);
    await writeTodos(todos);
    res.status(201).json(newTodo);
  });
    

// Get All Todos or Filter by date
app.get('/todos', async (req, res) => {
    const todos = await readTodos();
    const { date } = req.query;
  
    if (date) {
      const filtered = todos.filter(t => t.date === date);
      res.json(filtered);
    } else {
      res.json(todos);
    }
  });
  

// Get Todo by ID
app.get('/todos/:id', async (req, res) => {
  const todos = await readTodos();
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Update Todo
app.put('/todos/:id', async (req, res) => {
  const todos = await readTodos();
  const index = todos.findIndex(t => t.id == req.params.id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    await writeTodos(todos);
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Delete Todo
app.delete('/todos/:id', async (req, res) => {
  let todos = await readTodos();
  const newTodos = todos.filter(t => t.id != req.params.id);
  if (newTodos.length === todos.length) {
    res.status(404).json({ error: 'Todo not found' });
  } else {
    await writeTodos(newTodos);
    res.json({ message: 'Todo deleted' });
  }
});

app.get('/', (req, res) => {
    res.send("📋 Naman's Todo API is running!");
  });  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});