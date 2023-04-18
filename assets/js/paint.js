const canvas = document.querySelector("canvas");
const eraser = document.getElementById("canvas__delete");
const line__width = document.getElementById("line__width");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
let painting = false;
context.lineWidth = line__width.value;




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

const handleEraser = () => {
    context.reset();
}

const handleLineWidth = (event) => {
    context.lineWidth = event.target.value;
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mouseleave", endPainting);
eraser.addEventListener("click", handleEraser);
line__width.addEventListener("change", handleLineWidth);




