import express from "express";
import morgan from "morgan";
// import apiRouter from "./router/apiRouter";

const app = express();
const loggerMorgan = morgan("dev");
const PORT = 4000;


const handelListen = (req, res) => {
    console.log(`✅ Server running: http://localhost:${PORT}/`);
}

console.log(process.cwd() + "/src/views");
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(express.static(process.cwd() +  "/src/static"));
app.get("/", (req, res) => { res.render("home") });
app.use(loggerMorgan);
// app.use("/api", apiRouter);
app.listen(PORT, handelListen);