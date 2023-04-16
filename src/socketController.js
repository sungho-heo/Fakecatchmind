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
};

export default socketController;