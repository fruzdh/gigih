const {
  addSongToPlaylistService,
  getSongsService,
  playSongService,
} = require("../service/playlist");
const EmptyDataError = require("../utils/error");

const regex = new RegExp("^https://open.spotify.com/track/[0-9a-zA-Z]{22}$");

function addSongToPlaylistController(req, res) {
  try {
    const { title, url, artists } = req.body;
    if (typeof title !== "string") {
      res.status(400).json({ error: "song title must be string" });
    }

    if (title === "") {
      res.status(400).json({ error: "song title cannot be empty" });
    }

    if (typeof url !== "string") {
      res.status(400).json({ error: "song url must be string" });
    }

    if (!regex.test(url)) {
      res.status(400).json({ error: "song url must be spotify url" });
    }

    if (artists.length === 0) {
      res.status(400).json({ error: "song artists cannot be empty" });
    }

    for (let i = 0; i < artists.length; i++) {
      if (typeof artists[i] !== "string") {
        res.status(400).json({ error: "song artist must be string" });
      }
    }

    const song = addSongToPlaylistService(title, url, artists);

    res.status(201).json(song);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

function getSongsController(req, res) {
  try {
    const sortorder = req.query.sortorder;

    const songs = getSongsService(sortorder);

    res.status(200).json(songs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

function playSongController(req, res) {
  try {
    const { id } = req.body;
    if (typeof id !== "number") {
      res.status(400).json({ error: "song id must be number" });
    }

    if (id < 0) {
      res.status(400).json({ error: "song id cannot be negative" });
    }

    const song = playSongService(id);

    res.status(200).json(song);
  } catch (e) {
    if (e instanceof EmptyDataError) {
      res.status(404).json({ error: e.message });
    }
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  addSongToPlaylistController,
  getSongsController,
  playSongController,
};
