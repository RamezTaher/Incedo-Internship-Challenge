import path from "path"
import fs from "fs"
import request from "supertest"
import app from "./../src/app"
import { getRandomArtists } from "../src/utils"

describe("Artists endpoints", () => {
  it("request with missing param :name should return an error", async () => {
    const response = await request(app).get("/api/artists/")
    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual({
      success: false,
      statusCode: 400,
      message: "missing query params (name)",
    })
  })
  it("request with missing param :filename should return an error", async () => {
    const response = await request(app).get("/api/artists?name=anne-marie")
    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual({
      success: false,
      statusCode: 400,
      message: "missing query params (filename)",
    })
  })
  it("request with correct params and invalid artist name should return an array of random artists retrieved from JSON file", async () => {
    const response = await request(app).get(
      "/api/artists?name=qwert525236&filename=testfile"
    )
    expect(response.statusCode).toEqual(200)
    expect(response.body.data).toEqual(await getRandomArtists())
  })
  it("request with correct params and valid artist name should return an array of artists data and write CSV file", async () => {
    const response = await request(app).get(
      "/api/artists?name=eminem&filename=testfile"
    )
    const outDirectory = path.join(__dirname, "./../out/testfile.csv")
    expect(response.statusCode).toEqual(201)
    expect(response.body.data).toBeTruthy()
    expect(fs.existsSync(outDirectory)).toBe(true)
    fs.unlinkSync(outDirectory)
  })
})
