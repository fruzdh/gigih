import { FaPlay } from "react-icons/fa6";
import SongIcon from "../songIcon";
import { useContext } from "react";
import { AppContext } from "../../helpers/context";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const SongItem = ({ track }) => {
  const { token, setCurrentTrack } = useContext(AppContext);
  const history = useHistory();

  const handleSongOnClick = () => {
    history.push(`/song/${track.id}`);
  };

  const handlePlayOnClick = (e) => {
    if (track) {
      // const playEndpoint = "https://api.spotify.com/v1/me/player/play";
      // fetch(playEndpoint, {
      //   method: "PUT",
      //   headers: { Authorization: `Bearer ${accessToken}` },
      //   body: JSON.stringify({ uris: [track.uri] }),
      // }).catch((error) => console.log(error));
      setCurrentTrack(track);
    }
    e.stopPropagation();
  };

  return (
    <Flex
      w="170px"
      flexDir="column"
      gap="10px"
      p="10px"
      color="white"
      role="group"
      alignItems="center"
      position="relative"
      bgColor="#181818"
      borderRadius="10px"
      cursor="pointer"
      onClick={handleSongOnClick}
      _hover={{
        bgColor: "#282828",
      }}
    >
      <SongIcon
        w="150px"
        h="150px"
        imgUri={track?.album?.images?.length > 0 && track?.album?.images[0].url}
      />
      <Text className="textOneLine" w="100%">
        {track?.name}
      </Text>
      <Text className="textOneLine" w="100%">
        {track?.artists?.map((artist) => artist?.name).join(", ")}
      </Text>
      <IconButton
        icon={<FaPlay />}
        onClick={handlePlayOnClick}
        variant="green-button"
        borderRadius="50%"
        position="absolute"
        top="110px"
        right="20px"
        display="none"
        _groupHover={{
          display: "inherit",
        }}
      />
    </Flex>
  );
};

export default SongItem;
