# Megaplex Prime

> Simple content management website and public site for a residential project.

## Overview

This repository contains a React + Vite frontend (`client/`) and an Express + MongoDB backend (`server/`). The app provides a public marketing site and an admin dashboard for updating content (hero, amenities, floor plans, FAQ, construction updates, etc.).

## Features

- Public site with sections: Hero, About Project, Amenities, Connectivity, Floor Plans, Developer, Construction Updates, FAQ, Video, and more.
- Admin dashboard with protected routes for managing site content.
- Content is stored in MongoDB and served via a simple REST API.
- Seed script to populate example content.
- JWT-based admin authentication for the API.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (via Mongoose)
- Auth: JWT

## Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas)

## Setup (Local Development)

Server

1. Open a terminal and navigate to the `server` folder:

```bash
cd server
npm install
```

2. Create a `.env` file in the `server` folder with the following variables (example values shown):

```
MONGO_URI=mongodb://localhost:27017/megaplex
JWT_SECRET=your_jwt_secret_here
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=1234
PORT=5000
```

Make sure `ADMIN_EMAIL` and `ADMIN_PASSWORD` match what you intend to use for admin login.

3. (Optional) Seed the database with example content:

```bash
npm run seed
```

4. Start the server (development):

```bash
npm run dev
```

or start in production mode:

```bash
npm start
```

The server listens on `PORT` (default `5000`) and exposes API endpoints under `/api`.

Client

1. In a new terminal, navigate to the `client` folder and install dependencies:

```bash
cd client
npm install
```

2. (Optional) Add a Vite environment variable to point to the API if the server is not running on the default address:

Create a `.env` file in `client/` with:

```
VITE_API_URL=http://localhost:5000
```

3. Start the client (Vite dev server):

```bash
npm run dev
```

The client runs on Vite's default port (`5173`). CORS is configured for `http://localhost:5173` by default.

## Admin Login

- Web UI: Open `http://localhost:5173/admin/login` to access the admin login page.
- API: POST `/api/auth/login` with JSON body `{ "email": "...", "password": "..." }`.

Successful login returns a JWT token (stored by the client in `localStorage` under the key `megaplex_token`). The token is attached to API requests as `Authorization: Bearer <token>`.

Notes:

- The server checks credentials against the `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables. To use the demo credentials shown in the UI, set `ADMIN_EMAIL=admin@gmail.com` and `ADMIN_PASSWORD=1234` in your `server/.env`.
- Token lifetime is 7 days by default.

## API Endpoints (selected)

- `POST /api/auth/login` — Admin login (returns token)
- `GET /api/auth/verify` — Verify token (protected)
- `GET/POST/PUT` `/api/content` — Read and update site content (protected endpoints where appropriate)

Refer to `server/routes` for full route implementations.

## Seeding Example Content

The `server/seed.js` script populates the `content` collection with example sections (hero, aboutProject, amenities, connectivity, floorPlans, aboutDeveloper, constructionUpdates, faq). Run:

```bash
cd server
npm run seed
```

## Netlify (SPA) note

If you're hosting the frontend on Netlify and client-side routes (for example `/admin/login`) return 404, Netlify needs to serve `index.html` for all routes so React Router can handle them.

You can fix this by adding a `_redirects` file to `client/public` (already added) with the single line:

```
/* /index.html 200
```

Or by using `netlify.toml` in the repository root (also added) with a `[[redirects]]` rule that points all paths to `/index.html`.

After adding either file, rebuild and redeploy the site (Netlify will pick these up during build).

Rebuild locally and push to trigger Netlify deploy:

```bash
cd client
npm run build
git add -A
git commit -m "Add Netlify SPA redirect"
git push
```

If your Netlify site is configured to build from the repo, it will redeploy automatically. You can also trigger a manual redeploy from the Netlify dashboard.

## Environment Variables Summary

Server `.env` (required):

```
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
PORT=5000
```

Optional CORS configuration (server `.env`):

```
# Comma-separated list of allowed origins. Example:
ALLOWED_ORIGINS=http://localhost:5173,http://megaplex-prime.netlify.app

# Set to 'true' to accept requests from any origin (disable CORS origin checks):
ALLOW_ALL_ORIGINS=false
```

Notes:
- If `ALLOW_ALL_ORIGINS` is `true`, the server will accept any origin (useful when you don't want the CORS policy to block requests). Otherwise the server will only accept origins listed in `ALLOWED_ORIGINS`.
- For your deployment, add `http://megaplex-prime.netlify.app` to `ALLOWED_ORIGINS`, or set `ALLOW_ALL_ORIGINS=true` if you prefer to disable origin checks.

Client `.env` (optional):

```
VITE_API_URL=http://localhost:5000
```

## File Locations

- Frontend entry: `client/src/index.jsx`
- Admin UI: `client/src/pages/AdminLogin.jsx` and `client/src/pages/AdminDashboard.jsx`
- API client (axios): `client/src/api/api.js`
- Backend entry: `server/server.js`
- Auth routes: `server/routes/auth.js`
- Content routes: `server/routes/content.js`
- Seed script: `server/seed.js`

## Troubleshooting

- MongoDB connection errors: ensure `MONGO_URI` is correct and the database is reachable.
- CORS issues: client runs on port `5173` by default; `server/server.js` allows that origin. Update if you run the client elsewhere.
- Login failing: confirm `ADMIN_EMAIL` and `ADMIN_PASSWORD` in the server `.env` match credentials used in the UI.

## Next steps / Improvements

- Add persistent admin accounts in the database (currently auth checks env vars).
- Provide a simple admin user management UI.
- Add tests for backend routes and frontend flows.

---

If you'd like, I can also:

- Commit this `README.md` and update the repo's `package.json` scripts or CI settings.
- Add a sample `.env.example` file in `server/` and `client/`.

Created README.md — see the file in the repository root.
