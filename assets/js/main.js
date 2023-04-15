const body = document.querySelector("body");
const loginForm = document.getElementById("gameLogin");


const NICKNAME = "nickname";

const nickname = localStorage.getItem(NICKNAME);

if (nickname === null) {
    body.className = "loggedOut";
} else {
    body.className = "loggedIn";
}

const handleLoginSubmit = (event) => {
    event.preventDefault();
    const input = loginForm.querySelector("input");
    const value = input.value;
    input.value = "";
    localStorage.setItem(NICKNAME, value);
}

if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
}