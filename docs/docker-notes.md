# Docker Notes

## Purpose

This project uses Docker to run the application in isolated containers. The goal is to make the local development environment consistent, repeatable, and easier to transition into cloud container services such as AWS ECS.

## Local Container Architecture

The local project uses Docker Compose to run three services:

```text
React Frontend Container
        ↓
Node/Express Backend Container
        ↓
PostgreSQL Database Container