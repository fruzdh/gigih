const express = require("express");
const app = express();
const port = 3000;

const songs = [];

app.use(express.json());

app.post("/song", (req, res) => {
  const song = {
    id: songs.length,
    title: req.body.title,
    artist: req.body.artist,
    url: req.body.url,
  };
  songs.push(song);
  res.json({ id: song.id });
});

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.get("/song/:id", (req, res) => {
  const id = req.params.id;
  if (id >= songs.length) {
    res.json({});
  } else {
    res.json(songs[id]);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
