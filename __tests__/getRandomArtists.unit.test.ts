import { getRandomArtists } from "../src/utils"
import { getRandomArtistsMock } from "./mocks/getRandomArtistsMock"

describe("Get Random Artists", () => {
  test("retrieving random artists from JSON file", async () => {
    const artists = await getRandomArtists()
    expect(artists).toEqual(getRandomArtistsMock)
  })
})
