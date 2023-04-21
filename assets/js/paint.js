import { getSocket } from './sockets';
const canvas = document.querySelector("canvas");
const lineRange = document.getElementById("line__width");
const color = document.getElementById("color");
const earaser = document.getElementById("canvas__earaser");
const canvasClean = document.getElementById("canvas__clean");
const context = canvas.getContext("2d");
const gameColor = Array.from(document.getElementsByClassName("gameColor"));
const canvasMode = document.getElementById("canvasMode");
const canvasIcon = document.querySelector(".buttons i");
const controls = document.getElementById("controls");



const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let painting = false;
let isFilling = false;
let isEraser = false;
context.lineWidth = lineRange.value;


const beginPath = (x, y) => {
    context.beginPath();
    context.moveTo(x, y);
};

const strokePath = (x, y, color = null) => {
    let currentColor = context.strokeStyle;
    if (color !== null) {
        context.strokeStyle = color
    }
    context.lineTo(x, y)
    context.stroke()
    context.stokeStyle = currentColor
};


const onMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        beginPath(x, y);
        getSocket().emit(window.events.beginPath, { x, y });
    } else if (!isFilling) {
            strokePath(x, y);
        getSocket().emit(window.events.strokePath, {
            x,
            y,
            color: context.strokeStyle,
        });
    }
};

const startPainting = () => {
    painting = true;
};

const endPainting = () => {
    painting = false;
}

const handleClean = (event) => {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const handleLineRange = (event) => {
    context.lineWidth = event.target.value;
}


const colorValue = (color) => {
    context.fillStyle = color;
    context.strokeStyle = color;
}

const handleColor = (event) => {
    const value = event.target.value;
    colorValue(value);
}

const handleColorChange = (event) => {
    const colorNumber = event.target.dataset.color;
    colorValue(colorNumber);
    color.value = colorNumber;
};

const handleCanvasMode = () => {
    if (isFilling) {
        isFilling = false;
        canvasIcon.className = "fa-solid fa-fill";
    } else {
        isFilling = true;
        canvasIcon.className = "fa-solid fa-pencil";
    }
};
const fill = (color =null) => {
    let currentColor = context.fillStyle;
    if (color !== null) {
        context.fillStyle = color;
    }
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.fillStyle = currentColor;
}

const handleCanvasClick = () => {
    if (isFilling) {
        fill();
        getSocket().emit(window.events.fill, { color: context.fillStyle });
    }
};

const handleEaraser = () => {
    if (isEraser) {
        isEraser = false;
        context.strokeStyle = color.value;
    } else {
        isEraser = true;
        context.strokeStyle = "white";
        isFilling = false;
        canvasIcon.className = "fa-solid fa-fill";
    }
};

export const enableCanvas = () => {
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", endPainting);
    canvas.addEventListener("mouseleave", endPainting);
    canvas.addEventListener("click", handleCanvasClick);
};

export const disableCanvas = () => {
    canvas.removeEventListener("mousemove", onMove);
    canvas.removeEventListener("mousedown", startPainting);
    canvas.removeEventListener("mouseup", endPainting);
    canvas.removeEventListener("mouseleave", endPainting);
    canvas.removeEventListener("click", handleCanvasClick);
};

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFill = ({ color }) => fill(color);
export const hideControls = () => (controls.style.display = "none");
export const showControls = () => (controls.style.display = "flex");

export const resetCanvas = () =>
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

hideControls();
canvasMode.addEventListener("click", handleCanvasMode);
canvasClean.addEventListener("click", handleClean);
earaser.addEventListener("click", handleEaraser);
color.addEventListener("change", handleColor);
lineRange.addEventListener("change", handleLineRange);
gameColor.forEach((color) => color.addEventListener("click", handleColorChange));



