# 📋 Todo API – File-Based Persistence (Node.js + Express)

A simple CRUD Todo API built using Express.js and Node.js, now with persistent storage using the filesystem (`todos.json`). Designed for learning REST API fundamentals and deployment.

---

## 🚀 Features

- Create, read, update, and delete todos via REST API
- Data persisted using a JSON file (`todos.json`)
- Lightweight Express server with CORS enabled
- Deployed on Render for public access

---

## 📡 API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/todos`           | Get all todos             |
| GET    | `/todos/:id`       | Get a specific todo       |
| POST   | `/todos`           | Create a new todo         |
| PUT    | `/todos/:id`       | Update a todo             |
| DELETE | `/todos/:id`       | Delete a todo             |

---

## 🛠️ Running Locally

1. Clone the repo  
   `git clone https://github.com/naman99-agar/todo-api.git`
2. Install dependencies  
   `npm install`
3. Run the server  
   `node index.js`
4. Visit  
   `http://localhost:4800`

> Data will be stored in `todos.json`.

## 🌐 Live Demo

👉 [View API on Render](https://todo-api-k5dz.onrender.com)