import express from "express";

const ChatRouter = (io) => {
  const router = express.Router();
  io.on("connection", (socket) => {
    socket.on("enter", async (data) => {
      io.to("1").emit("예쪽", data);
    });
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

    socket.on("message", async (data) => {
      console.log(data);
      if (data.msg) {
        io.to("1").emit("broadcast", {
          id: data.id,
          msg: data.msg,
          time: data.time,
        });
      }
    });
    socket.on("ask-join", async (data) => {
      socket.join(data);
    });
    //socket.on
  });
  return router;
};
export default ChatRouter;
