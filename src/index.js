import express from "express";

const app = express();
const PORT = 4000;


const handelListen = (req, res) => {
    console.log(`✅ Server running: http://localhost:${PORT}/`);
}

app.listen(PORT, handelListen);