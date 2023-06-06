"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
var socket = (0, socket_io_client_1.io)("http://localhost:3000");
var input = require("readline-sync");
function sendMessage(socket) {
    var message = input.question("Enter message: ");
    if (message === "exit") {
        socket.disconnect(); // đóng kết nối an toàn
        return; // thoát khỏi hàm
    }
    socket.emit("message", message, function (response) {
        console.log("Server response:", response);
        // chỉ gọi lại hàm nếu tin nhắn trước đã được xử lý và máy chủ đã gửi phản hồi
        sendMessage(socket);
    });
}
socket.on("connect", function () {
    console.log("Connected to server");
    sendMessage(socket);
});
socket.on("disconnect", function () {
    console.log("Disconnected from server");
});
