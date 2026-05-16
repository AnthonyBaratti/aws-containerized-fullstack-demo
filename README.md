# Dockerized Full Stack Portfolio Demo

## Overview
This project demonstrates containerized application development using Docker and Docker Compose.

## Current Features
- PostgreSQL database running in a container
- Node.js/Express backend in container
- Health check endpoint

## Tech Stack
- Docker
- Docker Compose
- Node.js
- Express
- PostgreSQL

## Screenshots

### Docker Containers Running
![Docker Containers](screenshots/docker-containers.png)
![Frontend Container Addition](screenshots/frontend-backend-postgre-containers.png)

### Backend Health Check
![Backend Health Check](screenshots/backend-health.png)

### PostgreSQL Initialized
![PostgreSQL Initialized](screenshots/postgreSQL-init.png)

### Task API Persistence Demo
![Task API Demo](screenshots/task-api-demo.png)

### Task Creation & Deletion Demo
![Frontend Task Creation](screenshots/frontend-task-creation.png)
![Frontend Task Deletion](screenshots/frontend-task-deletion.png)

## How to Run
```bash
docker compose up --build
```
