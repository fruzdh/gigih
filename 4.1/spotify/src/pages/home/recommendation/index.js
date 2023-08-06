import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { getRecommendation } from "../../../services";
import { AppContext } from "../../../helpers/context";
import SongItem from "../../../components/songItem";
import { useHistory } from "react-router-dom";

const Recommendation = ({ genre }) => {
  const { token } = useContext(AppContext);
  const [tracks, setTracks] = useState([]);
  const [sliceIndex, setSliceIndex] = useState(0);
  const history = useHistory();

  const handleShowOnClick = () => {
    history.push(`/song/genre/${genre}`);
  };

  useEffect(() => {
    getRecommendation(genre, token.accessToken)
      .then((res) => setTracks(res.data?.tracks))
      .catch((err) => console.log(err));

    setSliceIndex(
      Math.floor(
        (Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ) -
          370) /
          170
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    tracks.length > 0 && (
      <Box my="10px">
        <Flex textColor="white" justifyContent="space-between" mb="10px">
          <Text fontWeight="bold">{genre}</Text>
          <Text
            className="hoverUnderline"
            fontSize="sm"
            onClick={handleShowOnClick}
          >
            Show All
          </Text>
        </Flex>
        <Flex
          w="calc(100vw - 300px - 30px - 20px)"
          maxW="calc(100vw - 300px - 30px - 20px)"
          overflow="hidden"
          justifyContent="space-between"
        >
          {tracks.slice(0, sliceIndex).map((track) => (
            <SongItem key={track.id} track={track} />
          ))}
        </Flex>
      </Box>
    )
  );
};

export default Recommendation;
