const { createServer } = require("http")
const createExpress = require("express")
const createSocket = require("socket.io")
const createWildcardMiddleware = require("socketio-wildcard")

const port = process.env.SERVER_PORT || 9500;
const express = createExpress()
const server = createServer(express)
const socket = createSocket(server)

socket.use(createWildcardMiddleware())
express.use(createExpress.static("public"))

socket.on("connection", socket =>
  socket.on("*", packet =>
    console.log(JSON.stringify(packet))
  )
)

express.get("/", (request, response) =>
  response.sendFile(
    path.resolve(__dirname, "public/index.html")
  )
)

server.listen(port, () => console.info(`Listening on port ${port}`))
