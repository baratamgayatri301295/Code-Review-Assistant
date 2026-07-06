# 🤖 AI Code Review Assistant

An AI-powered full-stack code review application that allows users to submit source code, receive intelligent code analysis using OpenAI, and view review history through a modern React interface.

---

## 🚀 Features

- Submit code for AI-powered review
- Analyze Java, Python, and JavaScript code
- View complete submission history
- AI-generated feedback and improvement suggestions
- Modern React + Material UI frontend
- Spring Boot REST API
- Node.js middleware for backend communication
- MySQL database for persistent storage

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Material UI
- Axios
- React Router

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate

### Middleware
- Node.js
- Express.js
- Axios

### Database
- MySQL

### AI
- OpenAI GPT API

---

## 📂 Project Structure

```
CodeReviewAssistant
│
├── frontend/          # React + Material UI
├── backend/           # Spring Boot REST API
├── middleware/        # Express Middleware
├── database/          # SQL Schema
├── docker/            # Docker Files
└── README.md
```
## ⚙️ Prerequisites

- Java 17+
- Maven
- Node.js 18+
- npm
- MySQL 8+
- OpenAI API Key

---

## ▶️ Running the Project

### 1. Clone Repository

```bash
git clone <https://github.com/baratamgayatri301295/Code-Review-Assistant>
cd CodeReviewAssistant
```

### 2. Create Database

```sql
CREATE DATABASE code_reviewer;
```

Import the schema from the `database` folder.

---

### 3. Configure Environment Variables

Backend

```properties
OPENAI_API_KEY=your_openai_api_key
```

Middleware (`middleware/.env`)

```env
PORT=3000
BACKEND_URL=http://localhost:8080/api
```

---

### 4. Start Backend

```bash
cd backend
mvn spring-boot:run
```

Runs on

```
http://localhost:8080
```
### 5. Start Middleware

```bash
cd middleware
npm install
npm run dev
```

Runs on

```
http://localhost:3000
```

---

### 6. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Submissions

| Method | Endpoint |
|---------|----------|
| POST | `/submissions` |
| GET | `/submissions/{id}` |
| GET | `/submissions/user/{userId}` |

### Reviews

| Method | Endpoint |
|---------|----------|
| POST | `/reviews/analyze/{submissionId}` |
| GET | `/reviews/{submissionId}` |

---

## 📸 Application Workflow

1. Submit source code.
2. Code is stored in MySQL.
3. Spring Boot processes the request.
4. Node.js middleware forwards the review request.
5. OpenAI analyzes the code.
6. AI feedback is stored in the database.
7. Users can view previous submissions and reviews.

---

## 🔧 Troubleshooting

| Problem | Solution |
|----------|----------|
| Backend won't start | Verify MySQL is running |
| OpenAI API error | Check your API key |
| Port already in use | Change port or stop the existing process |
| Database connection failed | Verify database credentials |

---

## 👩‍💻 Author
**Gayatri Baratam**
📧 Email: baratamgayatri15@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/gayatri-baratam-652974212/

---

## ⭐ Future Enhancements

- User Authentication (JWT)
- Monaco Code Editor
- Syntax Highlighting
- Docker Deployment
- AWS Deployment
- Admin Dashboard
- CI/CD Pipeline

---

**Version:** 1.0.0

**Status:** ✅ Completed