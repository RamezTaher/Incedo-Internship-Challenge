import express from "express"
const router = express.Router()
import ArtistController from "../controllers/artistController"

const artistController = new ArtistController()

router.get("/", artistController.getArtistsByName)

export default router
