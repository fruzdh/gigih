import { Flex, Text } from "@chakra-ui/react";
import { getRecommendation } from "../../../services";
import { AppContext } from "../../../helpers/context";
import { useContext, useEffect, useState } from "react";
import TopItem from "./topItem";

const Top = ({ genre }) => {
  const { token } = useContext(AppContext);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getRecommendation(genre, token.accessToken, 6)
      .then((res) => setTracks(res.data?.tracks))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text my="10px" textColor="white" fontSize="2xl" fontWeight="bold">
        Selamat malam
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-between" gap="10px" mb="10px">
        {tracks.map((track) => (
          <TopItem key={track.id} track={track} />
        ))}
      </Flex>
    </>
  );
};

export default Top;
