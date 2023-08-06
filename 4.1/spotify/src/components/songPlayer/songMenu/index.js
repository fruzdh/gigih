import { Flex } from "@chakra-ui/react";
import {
  FaComputer,
  FaListUl,
  FaMicrophone,
  FaRegSquareCaretRight,
  FaVolumeHigh,
} from "react-icons/fa6";
import Progress from "../../progress";

const SongMenu = () => {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      gap="10px"
      pr="10px"
      h="100%"
    >
      <FaRegSquareCaretRight className="icon" />
      <FaMicrophone className="icon" />
      <FaListUl className="icon" />
      <FaComputer className="icon" />
      <FaVolumeHigh className="icon" />
      <Progress w="100px" />
    </Flex>
  );
};

export default SongMenu;
