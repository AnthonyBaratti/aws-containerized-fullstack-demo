import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";

const API_URL = "http://localhost:3000";

function App() {
    // Use try catch for production purposes
    // Using simple build for demo purposes
    const [tasks, setTasks] = useState([]);
    const [title, setTitle]= useState("");

    async function fetchTasks() {
        const response = await fetch(`${API_URL}/tasks`);
        const data = await response.json();
        setTasks(data);
    }

    async function createTask(event) {
        event.preventDefault();

        if (!title.trim()) return;

        await fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        });

        setTitle("");
        fetchTasks();
    }

    async function toggleTask(task) {
        await fetch(`${API_URL}/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: !task.completed })
        });

        fetchTasks();
    }

    async function deleteTask(id) {
        await fetch(`${API_URL}/tasks/${id}`, {
            method: "DELETE"
        });

        fetchTasks();
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
            <main style = {{ maxWidth: "700px", margin: "40px auto",
                fontFamily: "Arial"
            }}>
                <h1>Dockerized Task Demo</h1>

                <p>
                    This frontend calls a Dockerized Node/Express API backed by PostgreSQL.
                </p>

                <form onSubmit ={createTask}>
                    <input value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="New task title"
                    style={{ padding: "8px", width: "70%"}}
                    />

                    <button style = {{ padding: "8px", marginLeft: "8px"}}>
                        Add Task
                    </button>
                </form>

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} style={{ marginTop: "12px" }}>
                            <span
                                style={{
                                    textDecoration: task.completed ? "line-through" : "none",
                                    marginRight: "12px"
                                }}
                            >
                                {task.title}
                                </span>
                            
                            <button onClick = {() => toggleTask(task)}>
                                {task.completed ? "Undo" : "Complete"}
                            </button>

                            <button
                                onClick={() => deleteTask(task.id)}
                                style={{ marginLeft: "8px" }}
                                >
                                    Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        );
}
createRoot(document.getElementById("root")).render(<App />);