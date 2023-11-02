import { mapToCSV } from "../src/utils"
import { artistsMapResult } from "./mocks/artistMapResult"
import { artistsMock } from "./mocks/artistsMock"

describe("Mapper unit tests", () => {
  it("map artist data to ArtistCSV interface", () => {
    const csvArtists = artistsMock.map((artist) => mapToCSV(artist))
    expect(csvArtists).toEqual(artistsMapResult)
  })
})
