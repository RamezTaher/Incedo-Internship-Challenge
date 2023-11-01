import express from "express"
import morgan from "morgan"
import path from "path"
import fs from "fs"

const router = express.Router()

if (process.env.NODE_ENV === "production") {
  const logDirectory = path.join(__dirname, "../Logs")
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
  router.use(
    morgan("combined", {
      stream: fs.createWriteStream(path.join(logDirectory, "access.log"), {
        flags: "a",
      }),
    })
  )
}

if (process.env.NODE_ENV === "development") {
  router.use(morgan("dev"))
}

export default router
