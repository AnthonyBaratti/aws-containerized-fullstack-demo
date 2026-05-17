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

## Screenshots (Docker)

### Backend & Postgre Containers in Docker
![Docker Containers](screenshots/docker-containers.png)

### Frontend added to Docker Containers
![Frontend Container Addition](screenshots/frontend-backend-postgre-containers.png)

### Backend Health Check
![Backend Health Check](screenshots/backend-health.png)

### PostgreSQL Initialized
![PostgreSQL Initialized](screenshots/postgreSQL-init.png)

### Task API Persistence Demo
![Task API Demo](screenshots/task-api-demo.png)

### Frontend UI Task Creation
![Frontend Task Creation](screenshots/frontend-task-creation.png)

### Frontend UI Task Deletion
![Frontend Task Deletion](screenshots/frontend-task-deletion.png)

## Screenshots (AWS)

### Creating dist file for S3 bucket
![Dist file creation](screenshots/dist-folder-creation.png)

### S3 Bucket
![S3 Bucket](screenshots/s3-bucket.png)

### S3 Policy & Access
![S3 Policy](screenshots/s3-policy-access.png)


## How to Run
```bash
docker compose up --build
```
