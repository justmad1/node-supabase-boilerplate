# 🧩 Node.js + Supabase Auth Template

A modular, scalable Node.js server boilerplate with Supabase authentication, JWT-based auth protection, Winston logging, and a health check endpoint — designed to serve as a reusable base for future projects.

---

## ✨ Features

- ✅ Supabase Auth (Login/Register with JWT)
- ✅ Secure JWT Middleware for Protected Routes
- ✅ Modular Structure (Controllers, Routes, Middleware)
- ✅ Winston Logging with HTTP Request Logs (via Morgan)
- ✅ Supabase Health Check Endpoint (`/health`)
- ✅ Environment Config via `.env`
- ✅ Nodemon for auto-restart during development

---

## 🗂 Project Structure

```txt
src/
├── app.js                        # Express app setup
├── server.js                     # App entrypoint
├── auth/
│   ├── jwtMiddleware.js          # JWT verification middleware
│   └── supabaseClient.js         # Supabase client instance
├── controllers/
│   ├── authController.js         # Auth logic (register/login)
│   ├── userController.js         # Protected route logic
│   └── healthController.js       # Health check logic
├── routes/
│   ├── authRoutes.js             # Routes for login/register
│   ├── protectedRoutes.js        # Routes for protected access
│   └── healthRoutes.js           # Route for /health
├── tests/
│   ├── supabaseConnectionTest.js # Reusable test function
│   └── runConnectionTest.js      # Script to run the test
├── config/
│   ├── logger.js                 # Winston logger config
.env                              # Environment config
```

---

## 🔐 Auth Endpoints
```txt
Method  | Route       | Description
--------|-------------|-------------------------
POST    | /register   | Register a new user
POST    | /login      | Login & get JWT
GET     | /profile    | Protected route
GET     | /health     | Supabase health check
```
🔒 /profile requires JWT in the Authorization header:

Authorization: Bearer <your_token>

## 🛠️ Setup

### 0. Create a Supabase Project

Follow the [Supabase Docs](https://supabase.com/docs/guides/getting-started) to create a new Supabase project.

### 1. Clone and install

```bash
git clone https://github.com/justmad1/node-supabase-boilerplate.git
cd node-supabase-template
npm install
```

### 2. Create a .env file
```js
PORT=3000
SUPABASE_URL=https:your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
JWT_SECRET=your-jwt-secret
```

🔑 Get your SUPABASE_ANON_KEY from:
Supabase Dashboard → Project → Settings → API

### 3. Run the server

```bash
npm start
```

#### Or test Supabase connection separately:
```bash
npm run test:supabase
```

## 📦 Ready to Use As a Template

Use this as a starter for:
- SaaS platforms
- Admin panels
- RESTful API backends
- Any Node.js project with Supabase as backend

---

## 📄 License

This project is licensed under the MIT License.