import { handleNewUser } from "./notifications.js";

let socket = null;

export const getSocket = () => socket;


export const updateSocket = (aSocket) => (socket = aSocket);


export const initSockets = (aSocket) => {
    const events = window.events;
    updateSocket(aSocket);
    aSocket.on(events.newUser, handleNewUser);
}



