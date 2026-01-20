# 📝 Notes App – Full Stack Web Application

A full stack Notes application built as part of a **Frontend Developer Intern Assignment**.

The application allows users to securely register, login, and manage personal notes with full CRUD functionality.

---

## 🚀 Features

### 🔐 Authentication
- User registration & login
- JWT-based authentication
- Protected routes

### 📝 Notes Management
- Create notes with title & description
- Edit and delete notes
- Search notes by title or description

### 🎨 UI
- Landing page with navbar & footer
- Responsive design
- Clean and simple CSS

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API
- Axios
- Normal CSS

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcrypt

---

## 📂 Project Structure

frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── context/
│ ├── services/
│ ├── routes/
│ └── styles/

backend/
├── controllers/
├── routes/
├── middleware/
├── config/
└── server.js

## ⚙️ Setup Instructions
git clone  https://github.com/Swadeshwar-k/note_app_frontend_task.git
cd note-app-frontend-task

##Backend Setup
cd backend
npm install

##Create .env file:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=frontend_task
JWT_SECRET=your_jwt_secret

## Start Backend
npx nodemon server.js

##Frontend Setup
cd frontend
npm install
npm run dev

##open 
http://localhost:5000

##API Overview
##Auth

POST /api/auth/register

POST /api/auth/login

##Notes

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

(All protected with JWT
