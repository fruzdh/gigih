import { FaSistrix } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AppContext } from "../../helpers/context";
import SongItem from "../../components/songItem";
import { Flex, IconButton, Input } from "@chakra-ui/react";

const Search = () => {
  const { token } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchTerm
    )}&type=track`;
    fetch(endpoint, {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data?.tracks?.items);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <form
        style={{ margin: "10px", textAlign: "center" }}
        onSubmit={handleSearch}
      >
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="song name"
          w="400px"
          mr="10px"
          textColor="white"
          boxShadow="none"
          borderColor="#2d2d2d"
          bgColor="#2d2d2d"
          borderRadius="30px"
          _focus={{
            borderColor: "white",
            boxShadow: "none",
          }}
        />
        <IconButton
          type="submit"
          isDisabled={searchTerm.length === 0}
          icon={<FaSistrix />}
          variant="normal-icon-button"
        />
      </form>
      <Flex
        mx="10px"
        h="calc(100vh - 80px - 30px - 65px)"
        maxH="calc(100vh - 80px - 30px - 65px)"
        wrap="wrap"
        justifyContent="space-between"
        gap="10px"
        overflowY="scroll"
      >
        {searchResults?.length > 0 &&
          searchResults?.map((track) => (
            <SongItem key={track.id} track={track} />
          ))}
      </Flex>
    </>
  );
};

export default Search;
