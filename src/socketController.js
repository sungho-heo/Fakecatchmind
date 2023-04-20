import events from "./events.js";
import { chooseWord } from "./words.js";

let sockets = [];
let inProgress = false;
let word = null;

const choosePainter = () => sockets[Math.floor(Math.random() * sockets.length)];

const socketController = (socket,io) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    const allBroadcast = (event, data) => io.emit(event, data);
    const sendPlayerUpadte = () => {
        allBroadcast(events.playerUpdate, { sockets });
    };
    const startGame = () => {
        if (inProgress === false) {
            inProgress = true;
            const painter = choosePainter();
            word = chooseWord();
            io.to(painter.id).emit(events.painterNotif, { word });
            allBroadcast(events.gameStarted);
        }
    };
    const endGame = () => {
        inProgress = false
    };

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        sockets.push({ id: socket.id, points: 0, nickname: socket.nickname });
        broadcast(events.newUser, { nickname });
        sendPlayerUpadte();
        if (sockets.length === 1) {
            startGame();
        }
    });
    
    socket.on(events.disconnect, () => {
        sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendPlayerUpadte();
        if (sockets.length === 1) {
            endGame();
        }
    });

    socket.on(events.sendMessage, ({ message }) => {
        broadcast(events.newMessage, { message, nickname: socket.nickname });
    });

    socket.on(events.beginPath, ({ x, y }) => {
        broadcast(events.beganPath, { x, y });
    });

    socket.on(events.strokePath, ({ x, y, color }) => {
        broadcast(events.strokedPath, { x, y, color });
    });

    socket.on(events.fill, ({ color }) => {
        broadcast(events.filled, { color });
    })
};

// setInterval(() => console.log(sockets), 3000);

export default socketController;