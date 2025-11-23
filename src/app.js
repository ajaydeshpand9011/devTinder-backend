/* ---------- ---------- ---------- */
/* Imports */
/* ---------- ---------- ---------- */

const express = require("express");

/* ---------- ---------- ---------- */
/* App Initialization & Configuration */
/* ---------- ---------- ---------- */

/* Application Instance */
const app = express();

/* Port Configuration */
const port = 7777;

/* ---------- ---------- ---------- */
/* Mount */
/* ---------- ---------- ---------- */

/* Global Middleware/Request Handler */
app.use("/test", (req, res) => {
    res.send('Hello from Test');
});

app.use("/hello", (req, res) => {
    res.send('Hello from Hello');
});

/* ---------- ---------- ---------- */
/* Server Start */
/* ---------- ---------- ---------- */

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
