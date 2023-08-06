import { Box, Flex, Text } from "@chakra-ui/react";
import SongIcon from "../../songIcon";
import { FaRegHeart } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../../../helpers/context";

const SongDetail = () => {
  const { currentTrack } = useContext(AppContext);

  return (
    <Flex gap="10px" alignItems="center" pl="10px" h="100%">
      <SongIcon h="60px" w="60px" imgUri={currentTrack?.imgUri} />
      <Box color="white" maxW="194px">
        <Text as="h3" className="hoverUnderline textOneLine" fontWeight="bold">
          {currentTrack && currentTrack.title}
        </Text>
        <Text className="hoverUnderline textOneLine" fontSize="xs">
          {currentTrack && currentTrack.artist}
        </Text>
      </Box>
      <FaRegHeart className="icon" />
    </Flex>
  );
};

export default SongDetail;
