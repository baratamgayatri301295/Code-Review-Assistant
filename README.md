# Code Review Assistant

AI-powered code review system using Spring Boot, Node.js, and OpenAI GPT-4.

## Quick Start

### Prerequisites
- Java 17+, Maven 3.8+
- Node.js 18+, npm 9+
- MySQL 8.0+
- OpenAI API Key

### Setup
```bash
# Clone repository
git clone <repository-url>
cd code-review-assistant

# Set environment variable
export OPENAI_API_KEY=your_key_here

# Create database
mysql -u root -p code_reviewer < database/schema.sql

# Terminal 1: Backend
cd backend && mvn spring-boot:run

# Terminal 2: Middleware
cd middleware && npm install && npm run dev

# Terminal 3: Test
curl -X POST http://localhost:3000/submissions \
  -H "Content-Type: application/json" \
  -d '{"userId": 1, "title": "Test", "codeContent": "class Hello{}", "language": "java"}'
```

## Tech Stack
- **Backend**: Java 17, Spring Boot 3.1.5, JPA/Hibernate
- **Middleware**: Node.js 18, Express.js
- **Database**: MySQL 8.0+
- **AI**: OpenAI GPT-4 API
- **DevOps**: Docker, Docker Compose

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/submissions` | Submit code |
| GET | `/submissions/{id}` | Get submission |
| GET | `/submissions/user/{userId}` | Get user submissions |
| POST | `/reviews/analyze/{submissionId}` | Analyze code |
| GET | `/reviews/{submissionId}` | Get review |

## Project Structure
```
backend/          → Spring Boot backend
middleware/       → Express.js middleware
database/         → SQL schemas
docker/           → Docker files
docs/             → Detailed documentation
```

## Docker Deployment
```bash
export OPENAI_API_KEY=your_key_here
docker-compose up -d
```

Access: `http://localhost:3000`

## Documentation
- [Software Installation Guide](./docs/SOFTWARE_INSTALLATION_GUIDE.md)
- [Implementation Guide](./docs/DETAILED_IMPLEMENTATION_GUIDE.md)
- [Quick Start Checklist](./docs/QUICK_START_CHECKLIST.md)

## Troubleshooting

| Issue | Fix |
|-------|-----|
| MySQL connection error | `net start MySQL80` or `brew services start mysql` |
| OpenAI 401 error | Verify API key: `echo $OPENAI_API_KEY` |
| Port in use | `lsof -i :8080` then `kill -9 <PID>` |
| Build fails | `mvn clean install -U` |

## Author
Gayatri Baratam  
📧 baratamgayatri15@gmail.com  
💼 LinkedIn :https://www.linkedin.com/in/gayatri-baratam-652974212/

---

**Version**: 1.0.0 | **Status**: Production Ready
