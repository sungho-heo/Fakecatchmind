const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;


context.rect(200, 200, 50, 200);
context.rect(500, 200, 50, 200);
context.rect(350, 300, 50, 100);
context.moveTo(200, 200);
context.lineTo(380, 100);
context.lineTo(550, 200);
context.fill()

