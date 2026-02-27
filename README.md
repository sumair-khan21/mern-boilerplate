<div align="center">

#  MERN Stack Boilerplate

### Production-Ready Fullstack Boilerplate

![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

A **production-ready**, **industry-grade** MERN stack boilerplate with authentication, role-based access control, file uploads, input validation at every layer, and full Docker support.

[Features](#-features) · [Tech Stack](#-tech-stack) · [Quick Start](#-quick-start) · [API Reference](#-api-reference) · [Docker](#-docker) · [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#1-backend-setup)
  - [Frontend Setup](#2-frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
  - [Auth Endpoints](#-auth-endpoints)
  - [User Endpoints](#-user-endpoints)
- [Authentication Flow](#-authentication-flow)
- [Security](#-security-features)
- [Docker](#-docker)
- [Deployment](#-deployment)
  - [Vercel (Frontend)](#vercel-frontend)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Backend
| Feature | Description |
|---------|-------------|
| 🔐 **JWT Authentication** | Access + Refresh token pattern with HTTP-only cookies |
| 🛡️ **RBAC** | Role-based access control (User, Admin) |
| 👤 **Ownership Protection** | Users can only access/modify their own data |
| 📤 **File Uploads** | Cloudinary + Multer for image uploads |
| ✅ **3-Layer Validation** | Frontend, API (Zod), and Database (Mongoose) |
| 🚦 **Rate Limiting** | Separate limiters for auth and general routes |
| 🔒 **Security Hardened** | Helmet, CORS, NoSQL injection prevention, HPP |
| 📊 **Pagination & Search** | Built-in pagination, search, and filtering |
| 🏥 **Health Check** | Health endpoint for monitoring |
| 🐳 **Dockerized** | Multi-stage Dockerfile + Docker Compose |
| ⚡ **Graceful Shutdown** | Proper signal handling (SIGTERM, SIGINT) |
| 🧱 **Service Pattern** | Controller → Service → Model architecture |

### Frontend
| Feature | Description |
|---------|-------------|
| ⚛️ **React 19 + Vite** | Lightning-fast development experience |
| 🎨 **Tailwind CSS v4** | Utility-first CSS with CSS variables |
| 🧩 **Shadcn UI** | Beautiful, accessible component library |
| 🗄️ **Redux Toolkit** | Global state management |
| 🔄 **RTK Query** | API calls with auto-caching and token refresh |
| 🪝 **Custom Hooks** | `useAuth` hook for easy auth access |
| 🛤️ **Protected Routes** | Route guards with role-based access |
| 📱 **Responsive** | Mobile-first responsive design |
| 🔔 **Toast Notifications** | Sonner for beautiful notifications |
| 🐳 **Dockerized** | Nginx-based production container |
| 🌐 **Vercel Ready** | Pre-configured for Vercel deployment |

---

## 🛠️ Tech Stack

### Backend
Node.js 20 • Express 5 • MongoDB 7 • Mongoose 8
JWT (jsonwebtoken) • Bcrypt.js • Zod • Cloudinary
Multer • Helmet • CORS • Express Rate Limit • HPP

text


### Frontend
React 19 • Vite 6 • Tailwind CSS 4 • Shadcn UI
Redux Toolkit • RTK Query • React Router 7
Lucide Icons • Sonner (Toast)

text


### DevOps
Docker • Docker Compose • Nginx • Vercel


---

## 📁 Project Structure
mern-boilerplate/
├── docker-compose.yml # Full stack Docker Compose
├── .env # Root environment variables
├── README.md
│
├── backend/
│ ├── docker/
│ │ └── mongo-init.js # MongoDB initialization
│ ├── src/
│ │ ├── config/
│ │ │ ├── cloudinary.config.js
│ │ │ ├── cors.config.js
│ │ │ ├── db.config.js
│ │ │ ├── env.config.js
│ │ │ └── multer.config.js
│ │ ├── constants/
│ │ │ └── index.js # ROLES, HTTP_STATUS
│ │ ├── controllers/
│ │ │ ├── auth.controller.js
│ │ │ └── user.controller.js
│ │ ├── middlewares/
│ │ │ ├── auth.middleware.js # authenticate, authorize, authorizeOwner
│ │ │ ├── error.middleware.js # Central error handler
│ │ │ ├── rateLimiter.middleware.js
│ │ │ └── validate.middleware.js
│ │ ├── models/
│ │ │ └── user.model.js
│ │ ├── routes/
│ │ │ ├── auth.routes.js
│ │ │ ├── index.js
│ │ │ └── user.routes.js
│ │ ├── services/
│ │ │ ├── auth.service.js
│ │ │ └── user.service.js
│ │ ├── utils/
│ │ │ ├── ApiError.js
│ │ │ ├── ApiResponse.js
│ │ │ ├── asyncHandler.js
│ │ │ └── logger.js
│ │ ├── validators/
│ │ │ ├── auth.validator.js
│ │ │ └── user.validator.js
│ │ ├── app.js
│ │ └── server.js
│ ├── .dockerignore
│ ├── .env
│ ├── .env.example
│ ├── .gitignore
│ ├── Dockerfile
│ ├── nodemon.json
│ └── package.json
│
└── frontend/
├── public/
├── src/
│ ├── app/
│ │ └── store.js # Redux store
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Header.jsx # Responsive navbar
│ │ │ ├── Footer.jsx
│ │ │ └── Layout.jsx # Outlet wrapper
│ │ ├── shared/
│ │ │ ├── ProtectedRoute.jsx # Auth + Role guard
│ │ │ ├── PublicRoute.jsx # Redirect if logged in
│ │ │ └── LoadingSpinner.jsx
│ │ └── ui/ # Shadcn components
│ │ ├── button.jsx
│ │ ├── card.jsx
│ │ ├── input.jsx
│ │ └── label.jsx
│ ├── features/
│ │ └── auth/
│ │ ├── authApi.js # RTK Query endpoints
│ │ └── authSlice.js # Auth state
│ ├── hooks/
│ │ └── useAuth.js # Custom auth hook
│ ├── lib/
│ │ └── utils.js # cn() utility
│ ├── pages/
│ │ ├── auth/
│ │ │ ├── LoginPage.jsx
│ │ │ └── RegisterPage.jsx
│ │ ├── HomePage.jsx
│ │ ├── AboutPage.jsx
│ │ ├── ContactPage.jsx
│ │ └── NotFoundPage.jsx
│ ├── router/
│ │ └── index.jsx # All routes
│ ├── utils/
│ │ └── constants.js
│ ├── App.jsx
│ ├── index.css # Tailwind v4 + CSS vars
│ └── main.jsx
├── .dockerignore
├── .env
├── .env.example
├── .gitignore
├── components.json
├── Dockerfile
├── index.html
├── jsconfig.json
├── nginx.conf
├── package.json
├── vercel.json
└── vite.config.js



---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **MongoDB** (Atlas or Local)
- **Cloudinary** account ([sign up free](https://cloudinary.com/))
- **Docker** (optional — for containerized setup)

---

### 1. Backend Setup

```bash
# Clone the repo
git clone https://github.com/your-username/mern-boilerplate.git
cd mern-boilerplate

# Setup backend
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your credentials (see Environment Variables section)

# Start backend
npm run dev
