import { createObjectCsvWriter } from "csv-writer"
import fs from "fs"
import path from "path"
import { IArtistCSV } from "../types/artist"

export async function writeFile(filename: string, data: IArtistCSV[]) {
  const logDirectory = path.join(__dirname, "../../out/")
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
  const csvWriter = createObjectCsvWriter({
    path: path.join(logDirectory, `${filename}.csv`),
    header: [
      { id: "name", title: "Name" },
      { id: "mbid", title: "Mbid" },
      { id: "image_small", title: "Image_small" },
      { id: "image", title: "Image" },
      { id: "url", title: "Url" },
    ],
  })
  try {
    await csvWriter.writeRecords(data)
  } catch (error) {
    console.log(error)
  }
}
