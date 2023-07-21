// create database
use spotify

genres = ['genre1', 'genre2', 'genre3', 'genre4', 'genre5', 
					'genre6', 'genre7', 'genre8', 'genre9', 'genre10']

function getRandomGenre() {
  const num = Math.floor(Math.random() * genres.length) + 1;
  const start = Math.floor(Math.random() * genres.length) + 1;
  const result = []
  for (let i=start; i<start+num; i++) {
    idx = i
    if (idx >= genres.length) {
      idx -= genres.length
    }
    result.push({genre: genres[idx]})
  }

  return result
}

artists = [
	{name: "name1", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name2", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name3", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name4", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name5", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name6", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name7", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name8", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name9", dateOfBirth: new Date(), genres: getRandomGenre()},
	{name: "name10", dateOfBirth: new Date(), genres: getRandomGenre()},
]

artistsId = db.artists.insertMany(artists)

function getRandomArtists() {
  const num = Math.floor(Math.random() * artists.length) + 1;
  const start = Math.floor(Math.random() * artists.length) + 1;
  const artistsResult = []
  for (let i=start; i<start+num; i++) {
    idx = i
    if (idx >= artists.length) {
      idx -= artists.length
    }
    artistsResult.push({id: artistsId['insertedIds'][String(idx)]})
  }

  return artistsResult
}

songs = [
	{title: 'title1', album: 'album1', artistIds: getRandomArtists()},
	{title: 'title2', album: 'album2', artistIds: getRandomArtists()},
	{title: 'title3', album: 'album3', artistIds: getRandomArtists()},
	{title: 'title4', album: 'album4', artistIds: getRandomArtists()},
	{title: 'title5', album: 'album5', artistIds: getRandomArtists()},
	{title: 'title6', album: 'album6', artistIds: getRandomArtists()},
	{title: 'title7', album: 'album7', artistIds: getRandomArtists()},
	{title: 'title8', album: 'album8', artistIds: getRandomArtists()},
	{title: 'title9', album: 'album9', artistIds: getRandomArtists()},
	{title: 'title10', album: 'album10', artistIds: getRandomArtists()},
]

songIds = db.songs.insertMany(songs)

function getPopularSongs() {
	const playCount = Math.floor(Math.random() * 10000) + 1;
	const periodOfTime = Math.floor(Math.random() * 15) + 2008;
	const result = []
	for (let i=0; i<songs.length; i++) {
		result.push({_id: songIds['insertedIds'][String(i)], playCount: playCount, periodOfTime: periodOfTime})
	}

	return result
}

popularSongs = getPopularSongs()

db.popularSongs.insertMany(popularSongs)