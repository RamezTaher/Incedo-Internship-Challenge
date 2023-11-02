import axios from "axios"
import { Response, Request } from "express"
import { ArtistQueryParams, IArtist } from "../types/artist"
import { mapToCSV, writeFile } from "../utils"

export default class ArtistController implements ArtistController {
  async getArtistsByName(
    req: Request<any, any, any, ArtistQueryParams>,
    res: Response
  ) {
    try {
      const { name, filename } = req.query
      if (!name) {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "please enter a name",
        })
      }

      const URL = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=daddd748c6487fea986fbe85f513c45f&format=json`
      const { data } = await axios.get<IArtist>(URL)
      const artists = data.results.artistmatches.artist
      if (filename) {
        const csvData = artists.map((artist) => mapToCSV(artist))

        const fileWritten = await writeFile(filename, csvData)
        if (!fileWritten)
          return res.status(400).json({
            success: false,
            statusCode: 400,
            message: "Something Wrong happened while saving file",
          })
      }

      return res.status(200).json({
        success: true,
        statusCode: 200,
        data: artists,
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
