const canvas = document.querySelector("canvas");
const lineRange = document.getElementById("line__width");
const color = document.getElementById("color");
const earaser = document.getElementById("canvas__earaser");
const canvasClean = document.getElementById("canvas__clean");
const context = canvas.getContext("2d");
const gameColor = Array.from(document.getElementsByClassName("gameColor"));
const canvasMode = document.getElementById("canvasMode");



const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let painting = false;
let isFilling = false;
let isEaraser = false;
context.lineWidth = lineRange.value;



const onMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (painting) {
        context.lineTo(x, y);
        context.stroke();
    };
    context.moveTo(x, y);
};

const startPainting = () => {
    painting = true;
};

const endPainting = () => {
    painting = false;
    context.beginPath();
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
        canvasMode.innerText = "Fill";
    } else {
        isFilling = true;
        canvasMode.innerText = "Draw";
    }
};

const handleCanvasClick = () => {
    if (isFilling) {
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
};

const handleEaraser = () => {
    if (isEaraser) {
        isEaraser = false;
        context.strokeStyle = "black";
    } else {
        isEaraser = true;
        context.strokeStyle = "white";
        isFilling = false;
        canvasMode.innerText = "Fill";
    }
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mouseleave", endPainting);
canvas.addEventListener("click", handleCanvasClick);
canvasMode.addEventListener("click", handleCanvasMode);
canvasClean.addEventListener("click", handleClean);
earaser.addEventListener("click", handleEaraser);
color.addEventListener("change", handleColor);
lineRange.addEventListener("change", handleLineRange);
gameColor.forEach((color) => color.addEventListener("click", handleColorChange));





