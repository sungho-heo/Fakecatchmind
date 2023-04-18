const canvas = document.querySelector("canvas");
const eraser = document.getElementById("canvas__delete");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

let painting = false;



const onMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (painting) {
        context.lineTo(x, y);
        context.stroke();
        console.log(x, y);
    };
    context.moveTo(x, y);
};

const startPainting = () => {
    painting = true;
};

const endPainting = () => {
    painting = false;
}

const handleEraser = () => {
    context.reset();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mouseleave", endPainting);
eraser.addEventListener("click", handleEraser);





