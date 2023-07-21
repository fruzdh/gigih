const Song = require("./song");

class Playlist {
  constructor() {
    this.songs = [];
  }

  addSongToPlaylist(title, url, artists) {
    const song = this.songs.find(
      (song) =>
        song.title === title &&
        song.url === url &&
        song.artists.sort().toString() === artists.sort().toString()
    );

    if (song === undefined) {
      const id = this.songs.length;
      const newSong = new Song(id, title, url, artists);
      this.songs.push(newSong);

      return newSong;
    }

    return song;
  }

  getSongById(id) {
    return this.songs.find((song) => song.id === id);
  }
}

module.exports = new Playlist();
