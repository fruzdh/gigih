import { useState } from "react";
import "./App.css";
import Playlist from "./components/playlist";
import Home from "./pages/home";
import Menu from "./components/menu";
import SongPlayer from "./components/songPlayer";
import { AppContext } from "./helpers/context";
import Search from "./pages/search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import theme from "./style";

function App() {
  const [token, setToken] = useState({});
  const [user, setUser] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider
        value={{
          token,
          setToken,
          user,
          setUser,
          currentTrack,
          setCurrentTrack,
          playlists,
          setPlaylists,
        }}
      >
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              {token.accessToken ? (
                <Grid
                  templateColumns="300px auto"
                  templateRows="100px auto 80px"
                  gap="10px"
                  h="100vh"
                  p="10px"
                  margin="auto"
                  backgroundColor="black"
                >
                  <GridItem rowSpan={1} colSpan={1} className="appGridItem">
                    <Menu />
                  </GridItem>
                  <GridItem rowSpan={2} colSpan={1} className="appGridItem">
                    <Switch>
                      <Route path="/song/genre/:genre"></Route>
                      <Route path="/song/:id"></Route>
                      <Route path="/playlist/:id"></Route>
                      <Route path="/search">
                        <Search />
                      </Route>
                      <Route path="/">
                        <Home />
                      </Route>
                    </Switch>
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    className="appGridItem"
                    px="10px"
                  >
                    <Playlist />
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={2}>
                    <SongPlayer />
                  </GridItem>
                </Grid>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
