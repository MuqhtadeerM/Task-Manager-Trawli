# ✦ TaskFlow – Task Manager App

A mobile-friendly Task Manager built with **React JS** (frontend) and **Python/Django** (backend).

🌐 **Live Demo:** [https://task-manager-trawli.vercel.app/](https://task-manager-trawli.vercel.app/)  
🔗 **Backend API:** [https://task-manager-trawli.onrender.com/api/tasks/](https://task-manager-trawli.onrender.com/api/tasks/)

---

## Tech Stack

| Layer    | Technology                                      |
|----------|-------------------------------------------------|
| Frontend | React 18, Vite, CSS3 (mobile-first)             |
| Backend  | Python 3.11, Django 4.2, Django REST Framework  |
| Database | SQLite (development)                            |
| Hosting  | Vercel (frontend) · Render (backend)            |

---

## Features

- Add tasks via input field
- View all tasks in a clean list
- Mark tasks as complete / incomplete
- Delete tasks
- Filter by All / Active / Completed
- Task counter (remaining & done)
- Mobile-responsive UI
- REST API (GET, POST, PATCH, DELETE)

---

## Project Structure
```
Task-Manager/
│
├── backend/
│   │
│   ├── manage.py
│   ├── requirements.txt
│   ├── build.sh
│   ├── runtime.txt
│   │
│   ├── taskmanager/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   ├── tasks/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   │
│   └── db.sqlite3
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ErrorMessage.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useTasks.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── .gitignore
└── README.md
```
---

## API Endpoints

Base URL: `https://task-manager-trawli.onrender.com/api`

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| GET    | `/tasks/`       | List all tasks    |
| POST   | `/tasks/`       | Create a new task |
| GET    | `/tasks/:id/`   | Get a single task |
| PATCH  | `/tasks/:id/`   | Update a task     |
| DELETE | `/tasks/:id/`   | Delete a task     |

### Sample Request – Create Task
```json
POST /api/tasks/
Content-Type: application/json

{
  "title": "Buy groceries"
}
```

### Sample Response
```json
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false,
  "created_at": "2024-01-15T10:30:00Z"
}
```

---

## Running Locally

### Prerequisites
- Python 3.10+
- Node.js 18+
- npm

---

### Backend Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd task-manager

# 2. Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Start the server
python manage.py runserver
```

API will be live at: `http://localhost:8000/api/tasks/`

---

### Frontend Setup

```bash
# 1. Navigate to frontend folder
cd frontend

# 2. Install dependencies
npm install

# 3. Create env file
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

App will open at: `http://localhost:5173`

---

### Environment Variables

**Frontend** – create `frontend/.env.local`:
```env
VITE_API_URL=http://localhost:8000/api
```

> For production, set `VITE_API_URL=https://task-manager-trawli.onrender.com/api`

---

## Testing the API (Postman)

### GET all tasks
```
GET https://task-manager-trawli.onrender.com/api/tasks/
```

### POST create a task
```
POST https://task-manager-trawli.onrender.com/api/tasks/
Content-Type: application/json

{ "title": "Buy groceries" }
```

### PATCH mark as complete
```
PATCH https://task-manager-trawli.onrender.com/api/tasks/1/
Content-Type: application/json

{ "completed": true }
```

### DELETE a task
```
DELETE https://task-manager-trawli.onrender.com/api/tasks/1/
```

---

## Deployment

### Frontend → Vercel
1. Push the repo to GitHub
2. Import project on [Vercel]([https://vercel.com](https://task-manager-trawli.vercel.app/))
3. Set **Root Directory** to `frontend`
4. Set **Build command**: `npm run build`
5. Set **Output directory**: `dist`
6. Add environment variable: `VITE_API_URL=https://task-manager-trawli.onrender.com/api`

### Backend → Render
1. Create a new **Web Service** on [Render]([https://render.com](https://task-manager-trawli.onrender.com/api/tasks/))
2. Connect your GitHub repo
3. Set **Build command**: `pip install -r requirements.txt && python manage.py migrate`
4. Set **Start command**: `gunicorn taskmanager.wsgi:application`
5. Add environment variables:
   - `DEBUG=False`
   - `DJANGO_SECRET_KEY=<your-secret-key>`

---

## Assumptions

- SQLite is used for local development
- No user authentication (all tasks are public — out of scope for this assignment)
- CORS is open to all origins in development; should be restricted in production
- Tasks are ordered by newest first

### Author
Muqhtadeer M
