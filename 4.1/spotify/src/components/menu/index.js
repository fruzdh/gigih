import { FaHouse, FaSistrix } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  return (
    <>
      <Button
        leftIcon={<FaHouse />}
        w="100%"
        mt="10px"
        onClick={() => history.push("/")}
      >
        Home
      </Button>
      <Button
        leftIcon={<FaSistrix />}
        w="100%"
        onClick={() => history.push("/search")}
      >
        Search
      </Button>
    </>
  );
};

export default Menu;
