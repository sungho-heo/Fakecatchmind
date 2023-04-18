const canvas = document.querySelector("canvas");
const lineRange = document.getElementById("line__width");
const color = document.getElementById("color");
const eraser = document.getElementById("canvas__delete");
const context = canvas.getContext("2d");
const gameColor = Array.from(document.getElementsByClassName("gameColor"));

canvas.width = 800;
canvas.height = 800;

let painting = false;
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

const handleEraser = (event) => {
    context.clearRect(0, 0, 800, 800);
}

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

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mouseleave", endPainting);
eraser.addEventListener("click", handleEraser);
color.addEventListener("change", handleColor);
lineRange.addEventListener("change", handleLineRange);
gameColor.forEach((color) => color.addEventListener("click", handleColorChange));





