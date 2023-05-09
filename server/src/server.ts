import http from "node:http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("someone has connected");
});

httpServer.listen(3000, () => {
  console.log("Listening on port :3000");
});
