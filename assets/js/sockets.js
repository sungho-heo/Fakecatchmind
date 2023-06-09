import { handleNewUser, handleDisconnect,handleGameTime } from "./notifications.js";
import { handleNewMessage } from "./chat.js";
import { handleBeganPath, handleStrokedPath, handleFill } from "./paint.js";
import {
  handlePlayerUpdate,
  handleGameStarted,
  handlePainterNotif,
  handleGameEnded,
  handleGameStarting,
} from "./player.js";
let socket = null;

export const getSocket = () => socket;


export const initSockets = (aSocket) => {
    const events = window.events;
    socket = aSocket;
    socket.on(events.newUser, handleNewUser);
    socket.on(events.disconnected, handleDisconnect);
    socket.on(events.newMessage, handleNewMessage);
    socket.on(events.beganPath, handleBeganPath);
    socket.on(events.strokedPath, handleStrokedPath);
    socket.on(events.filled, handleFill);
    socket.on(events.playerUpdate, handlePlayerUpdate);
    socket.on(events.gameStarted, handleGameStarted);
    socket.on(events.painterNotif, handlePainterNotif);
    socket.on(events.gameEnded, handleGameEnded);
    socket.on(events.gameStarting, handleGameStarting);
    socket.on(events.gameTime, handleGameTime);
};



