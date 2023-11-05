import { promises as fs } from "fs"
import path from "path"

export const getRandomArtists = async () => {
  const buffer = await fs.readFile(path.join(__dirname, "mockArtists.json"))
  const { artists } = JSON.parse(buffer.toString())
  return artists
}
