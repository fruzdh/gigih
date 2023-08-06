import { Flex, Text } from "@chakra-ui/react";
import SongIcon from "../../songIcon";

const PlaylistItem = ({ playlist }) => {
  return (
    <Flex
      alignItems="center"
      gap="10px"
      p="5px"
      borderRadius="10px"
      _hover={{ bgColor: "#212121" }}
      cursor="pointer"
      onClick={() => {}}
    >
      <SongIcon h="50px" w="50px" />
      <Text color="white">{playlist.name}</Text>
    </Flex>
  );
};

export default PlaylistItem;
