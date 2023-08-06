import { Flex, IconButton, Text } from "@chakra-ui/react";
import SongIcon from "../../../../components/songIcon";
import { FaPlay } from "react-icons/fa6";
import { useHistory } from "react-router-dom";

const TopItem = ({ track }) => {
  const history = useHistory();

  const handleSongOnClick = () => {
    history.push(`/song/${track.id}`);
  };

  const handlePlayOnClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Flex
      bgColor="#2d2d2d"
      borderRadius="10px"
      _hover={{ bgColor: "#4d4d4d" }}
      alignItems="center"
      w="32%"
      maxW="32%"
      cursor="pointer"
      onClick={handleSongOnClick}
      pr="10px"
      role="group"
      gap="10px"
    >
      <SongIcon
        w="80px"
        h="80px"
        imgUri={track?.album?.images?.length > 0 && track?.album?.images[0].url}
      />
      <Text
        className="textOneLine"
        textColor="white"
        fontWeight="bold"
        flexGrow="1"
      >
        {track.name}
      </Text>
      <IconButton
        variant="green-button"
        icon={<FaPlay />}
        borderRadius="50%"
        display="none"
        onClick={handlePlayOnClick}
        _groupHover={{ display: "inherit" }}
      />
    </Flex>
  );
};

export default TopItem;
