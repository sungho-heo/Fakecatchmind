const socket = io("/");

socket.on("hello", () => console.log("Sombdoy joined"));

setTimeout(() => socket.emit("goto"), 4000);