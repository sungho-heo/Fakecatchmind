import events from "./events.js";

const socketController = (socket) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    
    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        broadcast(events.newUser, { nickname });
    });
    
    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, { nickname: socket.nickname });
    });

    socket.on(events.sendMessage, ({ message }) => {
        broadcast(events.newMessage, { message, nickname: socket.nickname });
    });

    socket.on(events.beginPath, ({ x, y }) => {
        broadcast(events.beganPath, { x, y });
    });

    socket.on(events.strokePath, ({ x, y }) => {
        broadcast(events.strokedPath, { x, y });
    });
};

export default socketController;