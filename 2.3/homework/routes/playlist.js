const express = require("express");
const {
  addSongToPlaylistController,
  getSongsController,
  playSongController,
} = require("../controller/playlist");

const router = express.Router();

router.post("/playlist/song", addSongToPlaylistController);

router.get("/playlist/songs", getSongsController);

router.post("/playlist/song/play", playSongController);

module.exports = router;
