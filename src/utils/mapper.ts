import { Artist } from "../models/Artist"
import { IArtistCSV } from "../types/artist"

export function mapToCSV(artist: Artist): IArtistCSV {
  return {
    name: artist.name,
    mbid: artist.mbid || "mbid not found",
    image_small: artist.image[0]["#text"] || "no small_image",
    image: artist.image[1]["#text"] || "no image",
    url:artist.url
  }
}
