import { handleNewUser, handleDisconnect } from "./notifications.js";
import { handleNewMessage } from "./chat.js";

let socket = null;

export const getSocket = () => socket;


export const updateSocket = (aSocket) => (socket = aSocket);


export const initSockets = (aSocket) => {
    const events = window.events;
    updateSocket(aSocket);
    aSocket.on(events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnect);
    aSocket.on(events.newMessage, handleNewMessage);
};



