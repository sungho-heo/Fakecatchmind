import { handleNewUser, handleDisconnect } from "./notifications.js";
import { handleNewMessage } from "./chat.js";
import { handleBeganPath, handleStrokedPath, handleFill } from "./paint.js";
import { handlePlayerUpdate } from "./player.js";
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
};



