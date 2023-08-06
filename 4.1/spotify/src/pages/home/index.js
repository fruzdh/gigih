import { getRandomGenre } from "../../helpers/utils";
import { Box } from "@chakra-ui/react";
import Recommendation from "./recommendation";
import Top from "./top";

const Home = () => {
  const genres = getRandomGenre();

  return (
    <Box
      h="calc(100vh - 80px - 30px)"
      maxH="calc(100vh - 80px - 30px)"
      overflowY="scroll"
      px="10px"
    >
      <Top genre={genres[0]} />
      {genres.slice(1, genres.length).map((genre) => (
        <Recommendation genre={genre} />
      ))}
    </Box>
  );
};

export default Home;
