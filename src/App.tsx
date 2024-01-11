import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import TabBar from "./components/TabBar";
import { Box } from "@chakra-ui/react";
import logo from "../assets/proposal.jpeg";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main"></GridItem>
      <TabBar></TabBar>
    </Grid>
  );
}

export default App;
