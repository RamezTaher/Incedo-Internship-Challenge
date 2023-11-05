import { Artist } from "../models/Artist"

export type IArtist = {
  results: {
    artistmatches: {
      artist: Artist[]
    }
  }
}

export type IArtistCSV = {
  name: string
  mbid?: string
  image_small: string
  image: string
  url: string
}

export type ArtistQueryParams = {
  name: string
  filename: string
}
