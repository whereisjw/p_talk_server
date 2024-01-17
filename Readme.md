npm install socket.io@4

const { createServer } = require('http')
const { Server } = require('socket.io')
const server = createServer(app)
const io = new Server(server, {
cors: {
origin: "http://localhost:3000", // 클라이언트페이지의 주소
methods: ["GET", "POST"],
},
});

import { createServer } from "http";
import { Server } from "socket.io";

app.listen을 server.listen 으로 바꾼다

- 라우터 사용시

```
app.use("/chat", ChatRouter(io));
```

```
import express from "express";

const ChatRouter = (io) => {
  const router = express.Router();
  io.on("connection", () => {
    console.log("어떤놈이 웹소켓 연결함");
  });
  return router;
};
export default ChatRouter;
```

```
import express from "express";

const ChatRouter = (io) => {
  const router = express.Router();
  io.on("connection", () => {
    console.log("어떤놈이 웹소켓 연결함");
      io.emit("name", "홍길동"); // 클라이언트에 보낼때
    socket.on("age", (data) => { //클라이언트에서 받아올때
      console.log(data);
    }); //socket.on
  });
  return router;
};
export default ChatRouter;
```

### 특정룸 조인하기

클라이언트

```
  socket.emit("ask-join", "1");
```

서버

```
    socket.on("ask-join", (data) => {
      socket.join(data);
    });
```

socket.join 이라는 기능이 있음 클라이언트에서 emit 한 정보를 socket.on으로 받는거까지는 똑같음
그다음 join으로 묶으면됨

# 클라이언트

npm i socket.io-client

socket.emit() // 서버에 보낼때
socket.on('데이터이름',(data)=>{}) //서버에서 수신할때
