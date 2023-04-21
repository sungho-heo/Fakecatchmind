import events from "./events.js";
import { chooseWord } from "./words.js";

let sockets = [];
let inProgress = false;
let word = null;
let painter = null;

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
            painter = choosePainter();
            word = chooseWord();
            setTimeout(() => {
                allBroadcast(events.gameStarted);
                io.to(painter.id).emit(events.painterNotif, { word });
            }, 2000);
        }
    };
    const endGame = () => {
        inProgress = false
        allBroadcast(events.gameEnded);
    };

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        sockets.push({ id: socket.id, points: 0, nickname: socket.nickname });
        broadcast(events.newUser, { nickname });
        sendPlayerUpadte();
        if (sockets.length === 2) {
            startGame();
        }
    });
    
    socket.on(events.disconnect, () => {
        sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendPlayerUpadte();
        if (sockets.length === 1) {
            endGame();
        } else if (painter){
            if (painter.id === socket.id) {
                endGame();
            }
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