import { Box, Button } from "@chakra-ui/react";
import { generateRandomString } from "../../helpers/utils";
import { useContext, useEffect } from "react";
import { AppContext } from "../../helpers/context";
import { useHistory } from "react-router-dom";
import { getToken, getUser } from "../../services";

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const scope = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-modify-playback-state",
];

const Login = () => {
  const { setToken, setUser } = useContext(AppContext);

  const history = useHistory();

  const onClick = () => {
    const state = generateRandomString(16);
    const params = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: scope.join(" "),
      state: state,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get("code");

    if (authorizationCode !== null) {
      getToken(authorizationCode)
        .then((result) => {
          if (result.status === 200) {
            setToken({
              accessToken: result.data.access_token,
              refreshToken: result.data.refresh_token,
              authorizationCode: authorizationCode,
            });
            getUser(result.data.access_token)
              .then((res) => {
                setUser(res.data);
                history.push("/");
              })
              .catch((err) => console.log(err));
          } else {
            throw new Error(`Get access token failed: ${result}`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundColor="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        onClick={onClick}
        variant="green-button"
        borderRadius="30px"
        p="20px 60px"
        fontWeight="bold"
      >
        LOGIN
      </Button>
    </Box>
  );
};

export default Login;
