const body = document.querySelector("body");
const loginForm = document.getElementById("gameLogin");

const NICKNAME = "nickname";

const nickname = localStorage.getItem(NICKNAME);


const logIn = (nickname) => {
    window.socket = io("/");
    console.log(window.events.setNickname);
    window.socket.emit(window.events.setNickname, { nickname })
}


if (nickname === null) {
    body.className = "loggedOut";
} else {
    body.className = "loggedIn";
    logIn(nickname);
}


const handleLoginSubmit = (event) => {
    event.preventDefault()
    const input = loginForm.querySelector("input")
    const value = input.value
    input.value = ""
    localStorage.setItem(NICKNAME, value)
    body.className = "loggedIn";
    logIn(value);
};

if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
}
