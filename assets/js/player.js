import {
    hideControls,
    disableCanvas,
    enableCanvas,
    showControls,
    resetCanvas,
} from "./paint";
import { enableChat, disableChat } from "./chat";
const board = document.getElementById("gameBoard");
const notifs = document.getElementById("gameNotifs");

const addPlayer = (players) => {
    board.innerHTML = "";
    players.forEach((player) => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    });
}

const setNotif = (text) => {
    notifs.textContent = "";
    notifs.textContent = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayer(sockets);
export const handleGameStarted = () => {
    setNotif("");
    disableCanvas();
    hideControls();
    enableChat();
}

export const handlePainterNotif = ({word}) => {
    enableCanvas();
    showControls();
    disableChat();
    notifs.innerText = `You are the painter paint: ${word}`;
}

export const handleGameEnded = () => {
    setNotif("Game ended");
    disableCanvas();
    hideControls();
    resetCanvas();
}

export const handleGameStarting = () => {
    let countdownTime = 5;
    const updateCountdown = () => {
        countdownTime--;
        setNotif(`Game will start soon ${countdownTime}`);
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            setNotif("Game start");
        };
    };
    var countdownInterval = setInterval(updateCountdown, 1000);
}




