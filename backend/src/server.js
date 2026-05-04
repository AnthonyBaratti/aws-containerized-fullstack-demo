const express = require("express"); // Allows API endpoint creation
const cors = require("cors"); // Allows frontend communication to backend

const app = express(); //Creates API server

//Middleware
app.use(cors()); //Allows app to use cross-origin requests
app.use(express.json()); //Lets API read JSON

//Basic health check route
app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Backend is running" });
});

// Start server and backend
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
});

