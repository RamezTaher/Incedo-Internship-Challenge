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
import swaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"

// Import middlewares
import morganLogger from "./middlewares/morgan"

// Import Routes
import artistRouter from "./routes/artist"
import { BASE_URL } from "./config"

// Initialize app
const app = express()

// Use  middlewares
app.use(morganLogger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// Swagger Config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "INCEDO CODING CHALLENGE",
      description: "Last.fm api wrapper",
    },

    servers: [
      {
        url: BASE_URL,
      },
    ],
  },

  apis: ["./src/docs/*.ts"],
}

const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// Use Routes
app.use("/api/artists", artistRouter)

// Catch & handle 404 requests
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res
    .status(err.status || 500)
    .json({ code: 1, message: "Server Internal Error " })
}

app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404))
})

app.use(errorHandler)

export default app
