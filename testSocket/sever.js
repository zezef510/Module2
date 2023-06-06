"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var http = require("http");
var server = http.createServer();
var io = new socket_io_1.Server(server, { pingTimeout: 90000 });
io.on("connection", function (socket) {
    console.log("A user connected");
    socket.on("disconnect", function () {
        console.log("User ".concat(socket.id, " disconnected"));
    });
    socket.on("message", function (message) {
        console.log("Received message from ".concat(socket.id, ": ").concat(message));
    });
});
server.listen(3000, function () {
    console.log("Server started on port 3000");
});
