/**
 * @swagger
 * /api/artists:
 *   get:
 *     summary: Search and Write artists to a CSV file.
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the artist.
 *       - in: query
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the file you want to save results to.
 *     responses:
 *       '200':
 *         description: Artist data found.
 *         content:
 *           application/json:
 *             example:
 *               artistsData:
 *                 - name: "Anne-Marie"
 *                   mbid: ""
 *                   url: "https://www.last.fm/music/Anne-Marie"
 *                   image_small: "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"
 *                   image: "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
 *                 - name: "Marshmello & Anne-Marie"
 *                   mbid: ""
 *                   url: "https://www.last.fm/music/Marshmello+&+Anne-Marie"
 *                   image_small: "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"
 *                   image: "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
 *       '500':
 *         description: Something gone wrong when saving data to csv.
 */
