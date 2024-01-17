import cors from "cors";
import express, { urlencoded } from "express";
import MemberRouter from "./Router/MemberRouter.js";
import { createServer } from "http";
import { Server } from "socket.io";
import ChatRouter from "./Router/ChatRouter.js";
import ListRouter from "./Router/ListRouter.js";
import ImgRouter from "./Router/ImgRouter.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:3000/",
    methods: ["GET", "POST"],
  },
});
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/", MemberRouter);
app.use("/chat/1", ChatRouter(io));
app.use("/list", ListRouter);
app.use("/img", ImgRouter);
server.listen(4845, () => {
  console.log(`http://localhost:4845 실행중`);
});
