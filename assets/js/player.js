import { hideControls, disableCanvas } from "./paint"
const board = document.getElementById("gameBoard");

const addPlayer = (players) => {
    board.innerHTML = "";
    players.forEach((player) => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    });
}
export const handlePlayerUpdate = ({ sockets }) => addPlayer(sockets);
export const handleGameStarted = () => {
    disableCanvas();
    hideControls();
}