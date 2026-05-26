# Dockerized Full Stack Portfolio Demo
## Overview
This project demonstrates containerized application development using Docker and Docker Compose.<br>

[View Detailed Docker Notes](docs/docker-notes.md)

## Current Features

- Containerized full-stack development environment
- Node.js/Express REST API backend
- PostgreSQL relational database integration
- Docker Compose orchestration for multi-service deployment
- Persistent database storage using Docker volumes
- Environment-based configuration management
- Health monitoring endpoint for backend verification
- Scalable architecture designed for future AWS ECS/Fargate deployment

## Tech Stack

- Docker
- Docker Compose
- Node.js
- Express
- PostgreSQL

# AWS Deployment

## Overview

This portion of the project demonstrates the transition from a locally containerized frontend development environment using Docker Compose to a production-style static frontend deployment hosted in an AWS S3 bucket.

The frontend was converted from a Vite development server into a production build consisting of static HTML, JavaScript, and asset files that could be publicly hosted using AWS S3 static website hosting.

This phase of the project focuses on:
- static frontend hosting
- S3 bucket configuration
- bucket policies and public access management
- frontend production builds
- cloud deployment troubleshooting
- security and infrastructure concepts

The long-term deployment goal for this project is a more production-oriented cloud architecture using:
- AWS S3 for frontend hosting
- AWS ECS/Fargate for containerized backend deployment
- managed database infrastructure
- IAM-based security and least-privilege access control

[View AWS Deployment Document](docs/aws-deployment.md)