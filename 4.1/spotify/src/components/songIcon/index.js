import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

const SongIcon = ({ h, w, imgUri }) => {
  const [color] = useState(Math.floor(Math.random() * 16777215).toString(16));

  return (
    <Box
      bgColor={`#${color}`}
      h={h}
      minH={h}
      w={w}
      minW={w}
      borderRadius="10px"
    >
      {imgUri && (
        <Image
          h={h}
          minH={h}
          w={w}
          minW={w}
          borderRadius="10px"
          src={imgUri}
          alt="song"
        />
      )}
    </Box>
  );
};

export default SongIcon;
