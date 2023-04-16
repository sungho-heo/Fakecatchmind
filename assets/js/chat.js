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
    input.value = "";
    appendMsg(value);

};

if (sendMsg) {
    sendMsg.addEventListener("submit", handleSendMessage);
}