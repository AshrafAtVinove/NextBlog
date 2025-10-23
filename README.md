# Blog Fullstack (Next.js + NestJS + PostgreSQL + TypeORM)

This repository is a scaffold containing:
- `backend/` — NestJS API with TypeORM, JWT auth, PostgreSQL entities.
- `frontend/` — Next.js (App Router) frontend with register/login and posts list.
- `docker-compose.yml` and Dockerfiles to run everything locally.

> This scaffold is minimal but functional — customize, secure, and extend for production.

## Quick start (manual)
1. Create `.env` files from the provided `.env.example` files.
2. Start Postgres:
   ```bash
   docker-compose up -d db
   ```
3. Start backend:
   ```bash
   cd backend
   npm install
   npm run start:dev
   ```
4. Start frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## With docker-compose
```bash
docker-compose up --build
```

## Notes
- TypeORM is configured with `synchronize: true` for development only. Disable in production.
- Replace JWT secret and DB credentials with secure values in production.
