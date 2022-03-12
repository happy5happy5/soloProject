const app = require("./index");
const PORT = process.env.SERVERPORT || 80;

const Server = require("http").createServer(app);
const io = require("socket.io")(Server, {
  cors: {
    origin: [`http://localhost`],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("소켓 연결 완료");
  console.log(socket.id);

  socket.on("disconnect", () => {
    console.log("Disconnecting from server");
  });
});
Server.listen(PORT, () => {
  console.log("Server running on port:: %s", PORT);
});
