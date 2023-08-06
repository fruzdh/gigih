import { BiSolidCollection } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Text,
} from "@chakra-ui/react";
import PlaylistItem from "./playlistItem";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helpers/context";
import { getPlaylists, postPlaylist } from "../../services";

const Playlist = () => {
  const { token, user, playlists, setPlaylists } = useContext(AppContext);

  const [name, setName] = useState("");

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    postPlaylist(user.id, name, token.accessToken)
      .then((res) => {
        setPlaylists([res.data, ...playlists]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPlaylists(token.accessToken)
      .then((res) => setPlaylists(res.data.items))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Flex
        color="#eaeaea"
        alignItems="center"
        fontSize="xl"
        gap="10px"
        my="10px"
      >
        <BiSolidCollection />
        <Text>Playlist</Text>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <IconButton
              icon={<FaPlus />}
              variant="normal-icon-button"
              size="sm"
            />
          </PopoverTrigger>
          <PopoverContent bgColor="#2d2d2d" border="none">
            <PopoverHeader border="none" textAlign="start">
              Create New Playlist
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <form
                onSubmit={handleCreatePlaylist}
                style={{ textAlign: "end" }}
              >
                <Input
                  type="text"
                  placeholder="playlist name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  textColor="white"
                  boxShadow="none"
                  borderColor="#4d4d4d"
                  bgColor="#4d4d4d"
                  borderRadius="30px"
                  _focus={{
                    borderColor: "white",
                    boxShadow: "none",
                  }}
                />
                <Button
                  variant="green-button"
                  borderRadius="30px"
                  justifyContent="flex-end"
                  mt="10px"
                  isDisabled={name.length === 0}
                  type="submit"
                >
                  CREATE
                </Button>
              </form>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Box
        h="calc(100vh - 100px - 80px - 40px - 20px - 32px)"
        maxH="calc(100vh - 100px - 80px - 40px - 20px - 32px)"
        overflowY="scroll"
      >
        {playlists.map((playlist) => (
          <PlaylistItem key={playlist.id} playlist={playlist} />
        ))}
      </Box>
    </>
  );
};

export default Playlist;
