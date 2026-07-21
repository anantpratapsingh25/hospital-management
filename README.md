# 💊 Hospital Management System

**A Fullstack Hospital Management Website for Doctors and Patients**

Hospital Management is a user-friendly platform designed to simplify hospital interactions. Patients can register, book appointments, and manage medical records, while doctors can view appointments and medical histories — all from a unified interface.

---

## 🚀 Features

### 🔐 Authentication
- Secure Login/Register system for both Patients and Doctors
- Doctor accounts require Admin approval before appearing publicly

### 🏠 Overview Page
- Personalized dashboard displaying:
  - Profile details
  - Editable profile options
  - Key statistics

### 📅 Appointments
- View all scheduled appointments
- Book new appointments easily

### 🧑‍⚕️ Doctors Page
- Browse a directory of approved doctors
- Book appointments directly from doctor profiles

### 📁 Medical Records
- View all past and current medical records

### 🛠️ Admin Panel
- Approve or reject doctor registrations
- Manage patients and doctors
- View platform-wide statistics

---

## 🖥️ Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT-based secure auth system

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- A MongoDB database

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/hospital-management.git
cd hospital-management
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/` with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the server:
```bash
npm run dev
```

### 3. Set up the frontend
Open a new terminal:
```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.
