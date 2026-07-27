<div align="center">
  <h1>🛡️ DataSentinel AI</h1>
  <p><b>Intelligent Data Governance & Metadata Analytics Engine</b></p>
  
  [![Python](https://img.shields.io/badge/Python-3.10+-blue.svg?style=for-the-badge&logo=python&logoColor=white)]()
  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)]()
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)]()
  [![Gemini AI](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)]()
</div>

![Project Banner](https://github.com/CODERUDRA-X/intelligent-data-dictionary-agent/blob/main/Screenshot%202026-02-21%20115012.png?raw=true)
---

## 📖 Overview

**DataSentinel AI** transforms raw, undocumented relational databases into an intelligent knowledge layer. It automatically extracts SQL schemas, evaluates data quality, and utilizes Google Gemini AI to generate business-context explanations for complex technical data. 

Instead of just storing data, DataSentinel AI **understands** it, reducing developer onboarding time and mitigating compliance risks through automated schema documentation.

---

## ⚡ Core Features

* **Real-Time Schema Extraction:** Automatically maps tables, columns, datatypes, and foreign keys directly from the relational database using `information_schema`.
* **Scientific Data Health Scoring:** Computes an evidence-based reliability score by querying actual database metrics (null values, duplicates).
* **Context-Aware AI Intelligence:** Feeds live schema metadata to Gemini AI to generate accurate, business-friendly documentation and answer natural language queries.
* **Interactive Enterprise Dashboard:** A React-powered visualization layer displaying real-time metrics, structural relationships, and AI interactions.
* **PII & Sensitivity Detection:** Flags potentially sensitive data fields based on schema nomenclature and AI semantic analysis.

---

## 🏗️ System Architecture

DataSentinel AI operates on a strictly decoupled microservices architecture, ensuring real-time synchronization between the database layer and the AI reasoning engine.

```mermaid
graph TD
    %% Define Styles
    classDef user fill:#2563eb,stroke:#1d4ed8,stroke-width:2px,color:#fff
    classDef frontend fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff
    classDef backend fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    classDef ai fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    classDef db fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff

    %% Nodes
    U((User / Data Analyst)):::user
    UI[React.js Interactive Dashboard]:::frontend
    API{FastAPI Backend Engine}:::backend
    DB[(PostgreSQL Database)]:::db
    LLM[Google Gemini API]:::ai

    %% Connections
    U -->|Natural Language Query| UI
    UI -->|REST / JSON| API
    API -->|Schema Extraction Query| DB
    DB -->|Raw SQL Metadata| API
    API -->|Context + Prompt Construction| LLM
    LLM -->|Business Logic & Summary| API
    API -->|Aggregated Data Payload| UI
    UI -->|Visual Render| U

```

---

## 📊 Data Health Scoring Engine

The health score is not an arbitrary number. It is dynamically calculated by querying the database using a strict weighted algorithm.

**Evaluation Formula:**

$$Score = (0.40 \times Completeness) + (0.30 \times Uniqueness) + (0.30 \times Referential Integrity)$$

```mermaid
flowchart LR
    classDef raw fill:#374151,color:#fff
    classDef metric fill:#0284c7,color:#fff
    classDef engine fill:#b91c1c,color:#fff
    classDef output fill:#15803d,color:#fff

    A[Raw SQL Table]:::raw --> B(Completeness: Null Value %):::metric
    A --> C(Uniqueness: Duplicate Ratio):::metric
    A --> D(Integrity: Foreign Keys):::metric
    
    B --> E{Data Health Engine}:::engine
    C --> E
    D --> E
    
    E -->|Weighted Aggregation| F((Final Reliability Score)):::output

```

---

## 🛠️ Technical Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| **Frontend** | React.js, Tailwind CSS | High-performance interactive visualization |
| **Backend** | Python, FastAPI | Asynchronous REST API routing & logic |
| **Database ORM** | SQLAlchemy | Database-agnostic schema inspection |
| **AI Layer** | Google Gemini `1.5-flash` | Semantic analysis and contextual querying |
| **Server** | Uvicorn | Lightning-fast ASGI production server |

---

## 📂 Repository Structure

```text
intelligent-data-dictionary-agent/
│
├── backend/                  # Core Python FastAPI Application
│   ├── .env                  # Environment Variables (Ignored)
│   ├── database.py           # SQLAlchemy Connection Engine
│   ├── main.py               # API Routes & LLM Controllers
│   └── requirements.txt      # Python Dependencies
│
└── frontend/                 # React UI Dashboard
    ├── public/
    ├── src/
    │   ├── components/       # Reusable UI (ChatPanel, HealthCard)
    │   ├── pages/            # Main Views (Dashboard)
    │   └── services/         # API Handlers (api.js)
    ├── package.json          # Node Dependencies
    └── vite.config.js        # Build configuration

```

---

## 🚀 Quick Start Guide

### 1. Database & Backend Setup

Navigate to the backend directory and install the necessary dependencies:

```bash
cd backend
pip install -r requirements.txt

```

Create a `.env` file in the `backend` directory and add your AI credentials:

```env
GEMINI_API_KEY=your_secure_api_key_here

```

Start the ASGI server:

```bash
python -m uvicorn main:app --reload

```

*The backend API will initialize at `http://127.0.0.1:8000*`

### 2. Frontend Dashboard Setup

Open a new terminal, navigate to the frontend directory, and start the development server:

```bash
cd frontend
npm install
npm run dev

```

*The interactive dashboard will be live at `http://localhost:5173*`

---

## 🔌 Core API Reference

| Endpoint | Method | Payload | Description |
| --- | --- | --- | --- |
| `/tables` | `GET` | None | Returns a list of all detected tables in the database. |
| `/schema/{table_name}` | `GET` | None | Extracts column names and SQL datatypes. |
| `/health/{table_name}` | `GET` | None | Triggers real-time database queries to compute the reliability score. |
| `/analyze-ai/{table_name}` | `POST` | `{"question": "..."}` | Injects schema context into Gemini AI to answer user queries. |

---
