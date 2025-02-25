# Instagram App (MERN Stack)

## Overview
This project is a full-stack web application that integrates with Instagram's API using OAuth 2.0. It allows users to:

- Authenticate via Instagram OAuth.
- Fetch user profile information.
- Retrieve Instagram direct messages (conversations).
- Reply to messages.

## Tech Stack
- **Backend:** Node.js, Express, Axios, dotenv, cookie-parser
- **Frontend:** React, React Router, Axios
- **Database:** Not required (Instagram API used directly)

---

## Folder Structure
```
instagram-app/
 ├── backend/         # Node.js + Express backend
 │   ├── server.js
 │   ├── routes/
 │   │   ├── auth.js  # Instagram OAuth 2.0
 │   │   ├── user.js  # Fetch user profile
 │   │   ├── messages.js  # Fetch messages & reply
 │   ├── config.js   # Environment variables
 │   ├── package.json
 ├── frontend/        # React frontend
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── Login.js
 │   │   │   ├── Profile.js
 │   │   │   ├── Messages.js
 │   │   ├── App.js
 │   │   ├── index.js
 │   ├── package.json
 ├── README.md
```

---

## 1️⃣ Backend Setup

### **Step 1: Install Dependencies**
```
cd backend
npm install express axios dotenv cors cookie-parser
```

### **Step 2: Environment Variables**
Create a `.env` file inside the **backend/** folder and add:
```
INSTAGRAM_CLIENT_ID=your_client_id
INSTAGRAM_CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:5000/api/auth/callback
SERVER_URL=http://localhost:5000
```

### **Step 3: Start the Backend**
```
node server.js
```

---

## 2️⃣ Frontend Setup

### **Step 1: Install Dependencies**
```
cd ../frontend
npx create-react-app .
npm install axios react-router-dom
```

### **Step 2: Start the Frontend**
```
npm start
```

---

## 3️⃣ Usage Instructions

### **Login with Instagram**
1. Go to `http://localhost:3000/`
2. Click on the **Login** button.
3. Authenticate via Instagram.
4. Redirects to `http://localhost:3000/profile` to ow user details.

### **View Instagram Messages**
1. Navigate to `http://localhost:3000/messages`.
2. Fetches direct messages from the Instagram API.
3. Click **Reply** to send a response (feature in development).

---

## API Endpoints (Backend)

### **Authentication (OAuth 2.0)**
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/auth/login` | Redirects to Instagram login |
| GET | `/api/auth/callback` | Handles OAuth callback |

### **User Profile**
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/user/profile` | Fetches Instagram user details |

### **Messages**
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/messages/conversations` | Fetches Instagram conversations |
| POST | `/api/messages/reply` | Sends a reply to a message |

---

## 🚀 Features to Improve
- ✅ OAuth-based authentication
- ✅ Fetch user profile & messages
- 🛠 Reply functionality (in progress)
- 🔥 UI Enhancements & Styling

---


