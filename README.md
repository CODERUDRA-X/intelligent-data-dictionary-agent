# DataSentinel AI  
### Intelligent Data Dictionary Agent  

AI-powered Data Governance & Metadata Intelligence Engine.
![Project Banner](https://github.com/CODERUDRA-X/intelligent-data-dictionary-agent/blob/main/Screenshot%202026-02-21%20115012.png?raw=true)

---

## 🔍 Overview

Modern organizations store data across complex relational databases with poorly documented schemas, duplicate fields, and hidden sensitive information. Understanding such databases takes significant time and introduces onboarding delays and compliance risks.

**DataSentinel AI** automatically analyzes relational databases to:

- Extract schema metadata
- Generate AI-based business context
- Detect sensitive fields (PII)
- Compute a transparent Data Health Score
- Enable conversational querying over metadata

---

## 🧠 Core Features

- **Schema Extraction** using SQL metadata queries (`information_schema`)
- **Data Health Scoring Engine** with transparent weighted metrics
- **AI Context Enrichment** powered by Gemini API
- **Semantic Duplicate Detection**
- **Sensitive Data (PII) Identification**
- **React-based Interactive Dashboard**
- **FastAPI Backend Architecture**
- **Conversational Metadata Query Interface**

---

## 🏗 System Architecture

              User
               ↓ 
            React UI 
               ↓ 
         FastAPI Backend 
       ↙                ↘
    PostgreSQL        Gemini API

    - PostgreSQL provides relational schema metadata.
- FastAPI processes schema extraction and scoring logic.
- Gemini API enriches metadata with business-friendly explanations.
- React frontend visualizes health metrics and enables chat-based querying.

---

## 📊 Data Health Score Formula

The system computes a transparent health score using measurable quality metrics:

Score = (0.4 × Completeness) + (0.3 × Uniqueness) + (0.3 × Referential Integrity)

### Metrics Explained

- **Completeness** → Percentage of non-null values  
- **Uniqueness** → Duplicate ratio / primary key integrity  
- **Referential Integrity** → Valid foreign key relationships  

This ensures scoring remains explainable and auditable.

---

## 🛠 Tech Stack

**Backend**
- Python
- FastAPI
- PostgreSQL
- SQLAlchemy / psycopg2

**Frontend**
- React.js
- Tailwind CSS

**AI Layer**
- Google Gemini API

**Deployment**
- Docker (optional)
- Google Cloud Run

**Dataset**
- Brazilian E-Commerce Dataset (Olist)
- Bike Store Relational Database (Demo)

---

## 🚀 How to Run Locally

### 🔹 Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

Backend will run at:
http://127.0.0.1:8000

🔹 Frontend Setup

Bash
Copy code
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173

📌 Example API Endpoints
GET / → Service health check
GET /get-schema → Extract database schema
GET /health-report → Return computed health scores
POST /chat → Query metadata using natural language

🎯 Hackathon MVP Scope
This implementation focuses on:
Relational schema analysis
Transparent scoring logic
AI-generated metadata summaries
Conversational interface
Clean modular system architecture
Advanced enterprise extensions such as lineage visualization and incremental schema monitoring are part of future scope.

🔐 Security Notes
API keys are stored in .env
.env is excluded via .gitignore
No credentials are committed to repositor

CODERUDRA-X
Lead Architect
