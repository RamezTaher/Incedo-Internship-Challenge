import axios from "axios"
import { Response, Request } from "express"
import { ArtistQueryParams, IArtist } from "../types/artist"
import { getRandomArtists, mapToCSV, writeFile } from "../utils"
import { BASE_URL } from "../config"

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
          message: "missing query params (name)",
        })
      }

      if (!filename) {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "missing query params (filename)",
        })
      }

      const API_URL = `${BASE_URL}&artist=${name}`

      const { data } = await axios.get<IArtist>(API_URL)
      let artists = data.results.artistmatches.artist
      if (artists.length === 0) {
        artists = await getRandomArtists()
        return res
          .status(200)
          .json({ success: true, statusCode: 200, data: artists })
      } else {
        const csvData = artists.map((artist) => mapToCSV(artist))
        const fileWritten = await writeFile(filename, csvData)
        if (!fileWritten)
          return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Something gone wrong when saving data to csv",
          })
        return res
          .status(201)
          .json({ success: true, statusCode: 201, data: artists })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Server Internal Error",
      })
    }
  }
}
