// =========================================================
// PAYHINT EMPLOYMENT — FRONTEND + BACKEND SERVER
// =========================================================

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = 3000;

// =========================================================
// MIDDLEWARE
// =========================================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =========================================================
// SERVE FRONTEND FILES
// =========================================================

app.use(express.static(__dirname));

// =========================================================
// HOME PAGE
// =========================================================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// =========================================================
// BACKEND STATUS
// =========================================================

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "PAYHINT backend server is running.",
        status: "online"
    });
});

// =========================================================
// START SERVER
// =========================================================

app.listen(PORT, () => {
    console.log(
        `PAYHINT website and backend running at http://localhost:${PORT}`
    );
});