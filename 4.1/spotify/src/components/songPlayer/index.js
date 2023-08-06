import { Grid, GridItem } from "@chakra-ui/react";
import SongDetail from "./songDetail";
import SongOption from "./songOption";
import SongMenu from "./songMenu";

const SongPlayer = () => {
  return (
    <Grid templateColumns="300px auto 300px" templateRows="80px" gap="10px">
      <GridItem rowSpan={1} colSpan={1}>
        <SongDetail />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <SongOption />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <SongMenu />
      </GridItem>
    </Grid>
  );
};

export default SongPlayer;
