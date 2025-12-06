# job-tracker
Fullstack CRUD Job Application Tracker
# 📘 Full-Stack Job Tracker (CRUD Application)

A complete full-stack CRUD application to track job applications.  
Built with **HTML, CSS, JavaScript, Node.js, Express.js, and JSON database**.

This project demonstrates my full-stack development skills:
- Frontend UI  
- Backend REST API  
- Database operations  
- Clean file structure  
- Modular code  

---

## 🚀 Features
- Add new job application  
- View all job applications  
- Update job status  
- Delete a job  
- Fully responsive frontend  
- REST API built with Express  
- Persistent storage using JSON file  
- Clean and modern UI  

---

## 🗂️ Project Structure

job-tracker/
│── backend/
│ ├── server.js
│ ├── routes/
│ │ └── jobs.js
│ ├── controllers/
│ │ └── jobController.js
│ ├── data/
│ │ └── jobs.json
│ └── config/
│
│── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
│── package.json
│── README.md



---

## 🛠️ Tech Stack
### **Frontend**
- HTML  
- CSS  
- JavaScript (Fetch API)

### **Backend**
- Node.js  
- Express.js  
- CORS

### **Database**
- JSON file (acts like a lightweight NoSQL DB)

---

## ⚙️ How It Works

### 🔹 **1. Frontend (index.html + app.js)**
- Contains input form to add jobs  
- Displays job cards  
- Sends requests via `fetch()` to backend API  

### 🔹 **2. Backend (Express API)**
Exposes endpoints:

GET /api/jobs
POST /api/jobs
PUT /api/jobs/:id
DELETE /api/jobs/:id


### 🔹 **3. Database**
All data is stored inside:



## 🏃‍♂️ How to Run the Project

### 🔧 **Backend**

Install dependencies:

npm install

Start the backend API:

npm start


Backend runs on:

http://localhost:5000/api/jobs


---

### 🎨 **Frontend**

Simply open the file:

frontend/index.html


The frontend automatically connects to the backend.

---

### ▶ Example API Testing

GET all jobs:

GET http://localhost:5000/api/jobs


Add a job:

POST http://localhost:5000/api/jobs
Body (JSON):
{
  "title": "Backend Developer",
  "company": "Amazon",
  "status": "Applied",
  "notes": "Take-home assignment pending"
}


---


## 📝 About This Project

This full-stack CRUD Job Tracker demonstrates production-level skills:

* API design
* Data modeling
* CRUD functionality
* Client–server architecture
* UI development
* Routing & controllers
* JSON persistence
* Full GitHub workflow


---


## 🙋 For Recruiters

This project highlights my ability to:

* Build full-stack applications from scratch
* Design and implement REST APIs
* Create responsive user interfaces
* Connect frontend ↔ backend
* Handle CRUD operations
* Structure clean, modular code
* Use GitHub professionally

If you’d like a walkthrough or to discuss this project, I’d love to connect!

---



