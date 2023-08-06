import { Box } from "@chakra-ui/react";

const Progress = ({ w }) => {
  return (
    <Box w={w} h="15px" position="relative" role="group">
      <Box
        w="100%"
        h="5px"
        bgColor="#4d4d4d"
        borderRadius="3px"
        my="5px"
        pos="absolute"
      />
      <Box
        w="50%"
        h="5px"
        bgColor="white"
        borderRadius="3px"
        my="5px"
        pos="absolute"
        _groupHover={{
          bgColor: "#1ed760",
        }}
      />
      <Box
        boxSize="15px"
        bgColor="white"
        position="absolute"
        borderRadius="50%"
        left="calc(50% - 8px)"
        display="none"
        _groupHover={{
          display: "block",
        }}
      />
    </Box>
  );
};

export default Progress;
