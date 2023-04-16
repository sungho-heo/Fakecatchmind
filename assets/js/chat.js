import { getSocket } from "./sockets";

const messages = document.getElementById("gameMessages");
const sendMsg = document.getElementById("gameSendMsg");


const appendMsg = (text, nickname) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="author ${nickname ? "anyone" : "self"}">
        ${nickname ? nickname : "You"}:</span> ${text}
    `;
    messages.appendChild(li);
}

const handleSendMessage = (event) => {
    event.preventDefault();
    const input = sendMsg.querySelector("input");
    const value = input.value;
    getSocket().emit(window.events.sendMessage, { message: value });
    input.value = "";
    appendMsg(value);
};

export const handleNewMessage = ({ message, nickname }) => {
    appendMsg(message, nickname);
};

if (sendMsg) {
    sendMsg.addEventListener("submit", handleSendMessage);
}