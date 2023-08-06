import axios from "axios";

const getUser = (accessToken) => {
  return axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { getUser };
