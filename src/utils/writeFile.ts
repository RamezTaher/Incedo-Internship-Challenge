import { createObjectCsvWriter } from "csv-writer"
import fs from "fs"
import path from "path"
import { IArtistCSV } from "../types/artist"

export async function writeFile(
  filename: string,
  data: IArtistCSV[]
): Promise<boolean> {
  const logDirectory = path.join(__dirname, "../../out/")
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
  const csvWriter = createObjectCsvWriter({
    path: path.join(logDirectory, `${filename}.csv`),
    header: [
      { id: "name", title: "name" },
      { id: "mbid", title: "mbid" },
      { id: "image_small", title: "image_small" },
      { id: "image", title: "image" },
      { id: "url", title: "url" },
    ],
  })
  try {
    await csvWriter.writeRecords(data)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
