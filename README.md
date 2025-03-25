# Task 3
# demo Frontend

A **React 19 + TypeScript + Ant Design** frontend for managing and executing tasks in the **Task Manager API** (Spring Boot + MongoDB).

## Features
- **Create, View, Search, Delete Tasks**
-  **Execute Shell Commands as Tasks**
-  **View Task Execution Output**
-  **User-friendly UI with Ant Design**

---

## Prerequisites
- **Node.js** (v16+)
- **NPM** (v8+)
- **Task Manager API** (Backend must be running)
- **Minikube & Kubernetes** (For deployment)

---

## Installation & Setup
### **1️. Clone the Repository**
- **git clone https://github.com/your-username/task-manager-frontend.git**
- **cd demo-frontend**

### **2. Install Dependencies**
- **npm install**

### **3. Configure API URL**
- **Update src/api.ts to match your backend URL**
- **const API_URL = "http://127.0.0.1:31234"; // Change if needed**

### **4. Start The Application**
- **npm start**

## UI Components
- **TaskList.tsx - Displays tasks in a table**
- **TaskForm.tsx - Form to create a task**
- **TaskActions.tsx - Buttons for execute and delete**
