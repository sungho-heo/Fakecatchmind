const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.rect(50, 50, 100, 100);
context.rect(100, 100, 100, 100);
context.rect(150, 150, 100, 100);
context.rect(200, 200, 100, 100);
context.rect(250, 250, 100, 100);
context.fill();

context.beginPath();
context.rect(300, 300, 100, 100);
context.rect(350, 350, 100, 100);
context.rect(400, 400, 100, 100);
context.rect(450, 450, 100, 100);
context.fillStyle = "red";
context.fill();

context.beginPath();
context.rect(500, 500, 100, 100);
context.rect(550, 550, 100, 100);
context.rect(600, 600, 100, 100);
context.fillStyle = "orange";
context.fill();
