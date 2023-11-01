require("dotenv").config()

import app from "../app"
import http from "http"

const PORT = process.env.PORT || 8000
app.set("port", PORT)

const server = http.createServer(app)
server.listen(PORT)

server.on("listening", () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error
  }
  switch (error.code) {
    case "EACCES":
      console.error(`Port ${PORT} requires elevated privileges`)
      process.exit(1)
    case "EADDRINUSE":
      console.error(`Port ${PORT} is already in use`)
      process.exit(1)
    default:
      throw error
  }
})
