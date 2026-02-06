# 📝 Task Management Web Application

A full-stack **Task Management Web Application** built using **Node.js**, **Express**, **MongoDB**, and **Vanilla JavaScript**.  
This app allows users to create, manage, and track tasks efficiently with a clean, responsive UI.

---

## 🚀 Features

- ✅ **Create Tasks** — Add tasks with title, description, and status  
- 📋 **Read Tasks** — View all tasks in a structured, responsive list  
- ✏️ **Update Tasks** — Edit tasks using a modal interface  
- 🗑️ **Delete Tasks** — Remove tasks you no longer need  
- 🔍 **Filter Tasks** — Filter by status: All, Pending, In Progress, Completed  
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices  

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- CSS3 (Grid & Flexbox)  
- Vanilla JavaScript (ES6+)  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

---

## 📁 Project Structure

```
task-management/
├── backend/
│   ├── server.js          # Main server file with API routes
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
└── frontend/
    ├── index.html        # Main HTML file
    ├── styles.css        # Responsive styling
    └── script.js         # Frontend logic and API calls
```


---

## ⚙️ Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)  
  👉 https://nodejs.org/
- **MongoDB** (Local or Atlas)  
  👉 https://www.mongodb.com/

---

### Step 1: Install MongoDB

#### Option A: Local MongoDB
1. Download and install MongoDB Community Edition  
2. Start MongoDB service  
   ```bash
   mongod

#### Option B: MongoDB Atlas (Cloud)
1. Create an account on MongoDB Atlas
2. Create a free cluster
3. Copy your connection string


### Step 2: Setup Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `.env` file with your MongoDB connection:
   ```
   MONGODB_URI=mongodb://localhost:27017/task-management
   PORT=5000
   ```
   
   Or if using MongoDB Atlas:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/task-management
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

   You should see: `Server running on port 5000` and `MongoDB connected`

### Step 3: Setup Frontend

1. Open `frontend/index.html` in your web browser
   - Simply double-click the file, or
   - Use a local server: `npx http-server frontend/`

2. The app will connect to `http://localhost:5000`


---


## 📌 Task Status Options

- **pending** - Task is not started
- **in-progress** - Task is currently being worked on
- **completed** - Task is finished

---

## 🧑‍💻 Usage Guide

### ➕ Add a Task
- Enter a **title** (required)
- Add an optional **description**
- Select a **status**
- Click **Add Task**

### 🔍 Filter Tasks
- Filter tasks by:
  - **All**
  - **Pending**
  - **In Progress**
  - **Completed**

### ✏️ Edit a Task
- Click the **Edit** button on a task
- Update task details in the modal
- Click **Update Task**

### 🗑️ Delete a Task
- Click the **Delete** button
- Confirm deletion in the popup

---

## 🌟 Optional Enhancements

- 🔐 **Authentication**
  - JWT-based authentication
  - User login & registration

- 👤 **User-Based Tasks**
  - Associate tasks with individual users

- 🔎 **Search & Advanced Filters**
  - Keyword search
  - Filter by date range

- 📊 **Sorting**
  - Sort tasks by date, status, or title

- 🧪 **Testing**
  - Unit tests with **Jest**
  - Integration tests with **Supertest**
  - Frontend tests with **Vitest**

- 🚀 **Deployment**
  - Backend: **Railway**, **Heroku**, or **Vercel**
  - Frontend: **Vercel**, **Netlify**, or **GitHub Pages**
  - Database: **MongoDB Atlas**
