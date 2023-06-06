const io = require("socket.io")();
const port = 3000;

// Khởi tạo một mảng rỗng để lưu các kết nối của client
let connections = [];

io.on("connection", (socket) => {
    console.log("Client connected");

    // Thêm kết nối mới vào mảng connections
    connections.push(socket);

    socket.on("message", (message, callback) => {
        console.log(`Received message: ${message}`);
        // Lặp qua các kết nối trong mảng connections
        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            // Nếu kết nối hiện tại không phải là kết nối của client gửi tin nhắn
            if (connection !== socket) {
                // Chuyển tin nhắn đến kết nối này
                connection.emit("message", message);
            }
        }

    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");

        // Xóa kết nối này ra khỏi mảng connections
        connections = connections.filter((connection) => {
            return connection !== socket;
        });
    });
});

io.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
