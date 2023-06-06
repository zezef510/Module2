import  { io }  from "socket.io-client";

const socket = io("http://localhost:3000");
const input = require(`readline-sync`)


function sendMessage(socket) {

    const message = input.question("Enter message: ");

    if (message === "exit") {
        socket.disconnect(); // đóng kết nối an toàn
        return; // thoát khỏi hàm
    }
    socket.emit("message", message, (response) => {
        console.log("Server response:", response);

        // chỉ gọi lại hàm nếu tin nhắn trước đã được xử lý và máy chủ đã gửi phản hồi
        sendMessage(socket);
    })


}

socket.on("connect", () => {
    console.log("Connected to server");

    sendMessage(socket);
});


socket.on("disconnect", () => {
    console.log("Disconnected from server");
});

