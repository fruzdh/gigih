const playlist = require("../model/playlist");

function addSongToPlaylistService(title, url, artists) {
  const song = playlist.addSongToPlaylist(title, url, artists);

  return song;
}

function getSongsService(sortorder) {
  switch (sortorder) {
    case "asc":
      return playlist.songs.sort((a, b) => a.playCount - b.playCount);
    case "dsc":
      return playlist.songs.sort((a, b) => b.playCount - a.playCount);
    default:
      return playlist.songs;
  }
}

function playSongService(id) {
  const song = playlist.getSongById(id);
  if (song === undefined) {
    throw new EmptyDataError("song cannot be found");
  }

  song.playCount += 1;

  return song;
}

module.exports = {
  addSongToPlaylistService,
  getSongsService,
  playSongService,
};
