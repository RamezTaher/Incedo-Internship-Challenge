// Import section
import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express"
import createError from "http-errors"
import path from "path"
import cookieParser from "cookie-parser"

// Import middlewares
import morganLogger from "./middlewares/morgan"

// Import Routes
import indexRouter from "./routes/index"
import artistRouter from "./routes/artist"

// Initialize app
const app = express()

// Use  middlewares
app.use(morganLogger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// Use Routes
app.use("/", indexRouter)
app.use("/artists", artistRouter)

// Catch & handle 404 requests
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res
    .status(err.status || 500)
    .json({ code: 1, message: "An unexpected error has occured" })
}

app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404))
})

app.use(errorHandler)

export default app
