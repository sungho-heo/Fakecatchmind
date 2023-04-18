const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const colors = [
    "#FF6D60",
    "#98D8AA",
    "#C0DBEA",
    "#BA90C6",
    "#DDFFBB",
    "#FEDEFF",
];

const moveChange = (x, y) => {
    context.beginPath();
    context.moveTo(x, y);
};

const onClick = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    moveChange(0, 0);
    context.lineTo(x, y);
    context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    context.stroke();
    moveChange(400, 400);
    context.lineTo(x, y);
    context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    context.stroke();    
}


canvas.addEventListener("mousemove", onClick);


