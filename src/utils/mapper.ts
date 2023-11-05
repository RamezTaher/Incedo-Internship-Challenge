import { Artist } from "../models/Artist"
import { IArtistCSV } from "../types/artist"

export function mapToCSV(artist: Artist): IArtistCSV {
  return {
    name: artist.name,
    mbid: artist.mbid || "",
    image_small: artist.image[0]["#text"] || "",
    image: artist.image[1]["#text"] || "",
    url: artist.url,
  }
}
