export interface Artist {
  name: string
  mbid?: string
  url: string
  streamable: string
  image: Image[]
}

interface Image {
  ["#text"]: string
  size: string
}
