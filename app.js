const express = require("express");
const path = require("path");
const logger = require("morgan");
const http = require("http");

const apiRouter = require("./routes/api");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/dist")));
}

app.use("/api", apiRouter);

io.on("connection", (socket) => {
  console.log("a user connected");
});

module.exports = { app, server };
