const notifications = document.getElementById("gameNotifications");

const firstNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.background = color;
    notification.className = "notification"
    notifications.appendChild(notification);
}

export const handleNewUser = ({ nickname }) => {
    firstNotification(`${nickname} joined`, "rgb(0, 122, 255)");
};

export const handleDisconnect = ({ nickname }) => {
    firstNotification(`${nickname} log out!`, "rgb(255, 149, 0)");
};

