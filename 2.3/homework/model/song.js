class Song {
  constructor(id, title, url, artists) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.playCount = 0;
    this.artists = artists;
  }
}

module.exports = Song;
