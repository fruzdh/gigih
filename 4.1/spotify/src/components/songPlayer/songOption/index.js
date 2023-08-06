import { Box, Flex, Text } from "@chakra-ui/react";
import {
  FaBackwardStep,
  FaCirclePause,
  FaForwardStep,
  FaRepeat,
  FaShuffle,
} from "react-icons/fa6";
import Progress from "../../progress";
import { AppContext } from "../../../helpers/context";
import { useContext } from "react";

const SongOption = () => {
  const { currentTrack } = useContext(AppContext);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="10px"
      h="100%"
    >
      <Box
        display="flex"
        gap="5px"
        alignItems="center"
        justifyContent="center"
        fontSize="x-large"
      >
        <FaShuffle className="icon" />
        <FaBackwardStep className="icon" />
        <FaCirclePause className="icon" />
        <FaForwardStep className="icon" />
        <FaRepeat className="icon" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        gap="10px"
      >
        <Text>{currentTrack ? "5:00" : "~:~"}</Text>
        <Progress w="400px" />
        <Text>{currentTrack ? "10:00" : "~:~"}</Text>
      </Box>
    </Flex>
  );
};

export default SongOption;
