const body = document.querySelector("body");
const notifs = document.getElementById("gameNotifs");
const timer = document.getElementById("timer");

const firstNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
    firstNotification(`${nickname} joined`, "rgb(0, 122, 255)");
};

export const handleDisconnect = ({ nickname }) => {
    firstNotification(`${nickname} log out!`, "rgb(255, 149, 0)");
};

export const handleGameTime = () => {
    let gameTime = 150;
    const gameTimer = () => {
        gameTime--;
        let minutes = Math.floor(gameTime / 60);
        let seconds = gameTime % 60;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        };
        const minText = minutes < 10 ? "0" + minutes : minutes;
        const secText = seconds < 10 ? "0" + seconds : seconds;
        timer.innerText = minText + ":" + secText;
        if ((minutes === 0 && seconds === 0) || notifs.innerText ==="Game ended") {
          clearInterval(gameTimeInterval)
          timer.innerText = "00:00"
        };
    };
    const gameTimeInterval = setInterval(gameTimer, 1000);
}