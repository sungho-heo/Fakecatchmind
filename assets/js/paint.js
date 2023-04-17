const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;


// context.rect(200, 200, 50, 200);
// context.rect(500, 200, 50, 200);
// context.rect(350, 300, 50, 100);
// context.moveTo(200, 200);
// context.lineTo(380, 100);
// context.lineTo(550, 200);
// context.fill();

context.fillRect(250, 200, 20, 200);
context.fillRect(370, 200, 20, 200);
context.fillRect(280, 200, 80, 260);

context.arc(320, 150, 50, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(300, 140, 10, Math.PI, 0);
context.arc(340, 140, 10, Math.PI, 0);
context.fillStyle = "blue";
context.fill();


