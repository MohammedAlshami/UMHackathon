# UMHackathon — Financial Spending Dashboard

A Next.js + Python project for the **UM Hackathon**. It ingests personal bank statement data,
categorizes spending, and visualizes it with interactive charts, while offering a chat-style
assistant (OpenAI) that can answer questions about your spending trends.

## Demo features

- Upload/parse transaction JSON and render spending charts (bar, line, pie) with MUI/Plotly
- Date-range filters for slicing spending over time
- Category-level spending totals and trends
- Assistant chat endpoint backed by OpenAI
- Optional Firebase Firestore/Realtime lookup helpers

## Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, TailwindCSS, DaisyUI, MUI, Plotly
- **Backend:** Python Flask (main APIs), Pyrebase/Firebase

## Getting started

### 1. Frontend

```bash
npm install
npm run dev   # http://localhost:3000
```

Create `.env.local`:

```ini
NEXT_PUBLIC_OPENAI_API_KEY=sk-...
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_DB_URL=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 2. Backend

```bash
cd Backend
python -m venv venv      # or: python -m pip install -r requirements.txt
pip install -r requirements.txt
python main.py            # runs on http://127.0.0.1:5000 by default
```

Set environment vars (or edit `.env`):

```ini
OPENAI_API_KEY=sk-...
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_DB_URL=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

## Project layout

```
app/                  # Next.js frontend
Backend/              # Flask service (charts APIs, OpenAI assistant, Firebase)
public/               # static assets
category_spending.txt # sample spending data
```

## Notes

- Start keys from the Flask backend (`/api/ask`) and frontend OpenAI calls are configurable via env vars — nothing is hardcoded in this public build.
