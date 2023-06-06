import { Server } from "socket.io";
import * as http from 'http'

const server = http.createServer();
const io = new Server(server, { pingTimeout : 90000});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log(`User ${socket.id} disconnected`);
    });

    socket.on("message", (message) => {
        console.log(`Received message from ${socket.id}: ${message}`);

    });
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});