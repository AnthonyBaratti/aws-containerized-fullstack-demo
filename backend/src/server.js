const express = require("express"); // Allows API endpoint creation
const cors = require("cors"); // Allows frontend communication to backend
const pool = require("./db");
const taskRoutes = require("./routes/tasks");

const app = express(); //Creates API server

//Middleware
app.use(cors()); //Allows app to use cross-origin requests
app.use(express.json()); //Lets API read JSON

app.use("/tasks", taskRoutes);

//Basic health check route
app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Backend is running" });
});

//test db route
app.get("/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            status: "Database connected",
            time: result.rows[0].now,
        });
    }
    catch (error){
        console.error(error);
        res.status(500).json({ error: "Database connection failed"});
    }
});

// Start server and backend
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
});

