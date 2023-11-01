import { Response, Request } from "express"

export default class ArtistController implements ArtistController {
  async getArtistsByName(req: Request, res: Response) {
    try {
      res
        .status(200)
        .json({ success: true, statusCode: "200", message: "artist" })
    } catch (error) {
      res
        .status(500)
        .json({ success: false, statusCode: "500", message: "error" })
    }
  }
}
