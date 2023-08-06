import axios from "axios";

const getRecommendation = (genre, accessToken, limit = 20) => {
  return axios.get(
    `https://api.spotify.com/v1/recommendations?limit=${limit}&seed_genres=${genre}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export { getRecommendation };
