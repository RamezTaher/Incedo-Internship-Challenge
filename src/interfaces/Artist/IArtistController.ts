import { Response, Request } from "express"
import { ArtistQueryParams } from "../../types/artist"

export interface IArtistController {
  getArtistsByName(
    req: Request<any, any, any, ArtistQueryParams>,
    res: Response
  ): void
}
