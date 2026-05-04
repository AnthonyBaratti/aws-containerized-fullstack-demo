-- Purpose: Create first table for postgre sql inside of docker
-- Ran from docker-compose.yml "./database/init.sql:/docker-entrypoint-initdb.d/init.sql"
-- Creator: Anthony Baratti
-- Date: 4/28/26

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);