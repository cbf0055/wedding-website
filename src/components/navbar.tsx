import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/proposal.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <a
        href="https://www.amazon.com/wedding/registry/11WX48EK7UR58"
        className="button"
      >
        {" "}
        View registry
      </a>
      <Text>Lauren and Chandler</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
