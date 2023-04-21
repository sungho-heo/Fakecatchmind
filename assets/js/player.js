import {
  hideControls,
  disableCanvas,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint"
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
    notifs.innerText = "";
    notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayer(sockets);
export const handleGameStarted = () => {
    setNotif("");
    disableCanvas();
    hideControls();
}

export const handlePainterNotif = ({word}) => {
    enableCanvas();
    showControls();
    notifs.innerText = `You are the painter paint: ${word}`;
}

export const handleGameEnded = () => {
    setNotif("Game ended");
    disableCanvas();
    hideControls();
    resetCanvas();
}