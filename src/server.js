import express from "express";
import morgan from "morgan";
import { Server } from "socket.io"
import socketController from "./socketController";
import events from "./events";


const app = express();
const loggerMorgan = morgan("dev");
const PORT = 4000;


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(loggerMorgan);
app.use(express.static(process.cwd() +  "/src/static"));
app.get("/", (req, res) =>  res.render("home", { events: JSON.stringify(events) }) );

const handelListen = (req, res) => {
    console.log(`✅ Server running: http://localhost:${PORT}/`);
}


const server = app.listen(PORT, handelListen);

const io = new Server(server);

io.on("connection", (socket) => socketController(socket,io));

