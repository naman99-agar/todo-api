# 📝 Simple To‑Do API (Node.js + Express)

This is a beginner‑friendly RESTful API for managing to‑do tasks, built with **Node.js** and **Express.js**. It supports basic CRUD operations and will be later extended with database and deployment support.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- cURL / Hoppscotch for testing

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
2. Start the server
node index.js
Server runs at: http://localhost:3000

🧪 Sample API Endpoints (cURL)

Create a task
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"task": "Learn backend"}'
Get all tasks
curl http://localhost:3000/todos
Update a task
curl -X PUT http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"task": "Updated task"}'
Delete a task
curl -X DELETE http://localhost:3000/todos/1
🚀 Roadmap

✅ Basic CRUD API
🔜 Add MongoDB
🔜 Auth with JWT
🔜 Frontend with React
🔜 Full stack deployment

📌 Author

Naman Agarwalla