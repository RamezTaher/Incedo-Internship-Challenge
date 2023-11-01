import axios from "axios"
import { Response, Request } from "express"

export default class ArtistController implements ArtistController {
  async getArtistsByName(req: Request, res: Response) {
    try {
      const { name } = req.query
      if (!name) {
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: "please enter a name",
        })
      }

      let URL = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=daddd748c6487fea986fbe85f513c45f&format=json`
      const data: any = await axios.get(URL)

      return res.status(200).json({
        success: true,
        statusCode: 200,
        data: data.data?.results?.artistmatches,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: "error",
      })
    }
  }
}
