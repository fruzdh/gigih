import axios from "axios";

const getPlaylists = (accessToken) => {
  return axios.get(
    `
  https://api.spotify.com/v1/me/playlists`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

const postPlaylist = (id, name, accessToken) => {
  return axios.post(
    `https://api.spotify.com/v1/users/${id}/playlists`,
    { name: name },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export { getPlaylists, postPlaylist };
