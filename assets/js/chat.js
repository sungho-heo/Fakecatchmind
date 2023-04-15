export const handleMessageNotif = (data) => {
    const message = data.message;
    const nickname = data.nickname;
    console.log(`${nickname}: ${message}`);
};