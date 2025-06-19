# ✅ Task Tracker App (React)

A simple and efficient Task Tracker built with React that allows users to manage their daily tasks. You can add, edit, delete, and filter tasks based on their completion status. The application uses `localStorage` to persist data and is fully responsive across devices.

---

## 🚀 Features

- 📝 Add new tasks with optional descriptions and due dates
- ✏️ Edit existing tasks
- ❌ Delete tasks with confirmation
- ✅ Mark tasks as completed or pending
- 🔍 Filter tasks by status (All, Completed, Pending)
- 🔁 Persist tasks in `localStorage`
- 🌐 Responsive design (desktop, tablet, and mobile)
- 📄 Form validation and error handling
- 🔗 Page navigation with React Router
- 🎨 Styled with custom CSS (or Tailwind CSS, if applied)

---

## 🛠 Technologies Used

- React
- React Router DOM
- React Hooks (`useState`, `useEffect`, `useContext`)
- Context API (for global state)
- UUID (for unique task IDs)
- localStorage (data persistence)
- Custom CSS / Tailwind CSS (for styling)

---

## 📁 Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── TaskCard.jsx
│ ├── TaskForm.jsx
│ └── TaskList.jsx
├── context/
│ └── TaskContext.jsx
├── pages/
│ ├── TaskDashboard.jsx
│ ├── AddTask.jsx
│ └── EditTask.jsx
├── App.jsx
├── index.js
└── styles.css

---

## 💻 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-tracker-app.git
   cd task-tracker-app
Install dependencies:

npm install
Start the development server:

npm start
View the app in your browser:

http://localhost:3000

🙋 About the Project
This project was built as part of a React learning module to demonstrate practical use of:

Component-based architecture

Form handling and validation

State and effect management with Hooks

Global state sharing with Context API

Client-side routing

Persistent storage using localStorage

📄 License
This project is for educational purposes only.

✨ Author
Adrián Flores
Developer and React Enthusiast

