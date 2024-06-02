import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/proposal.jpeg";

const NavBar = () => {
  return (
    <HStack>
      <div className="header">Lauren and Chandler's Wedding Website</div>
      <a
        href="https://www.amazon.com/wedding/registry/11WX48EK7UR58"
        className="button"
      >
        {" "}
        View registry
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeJvqjULXVwFQUjlPneXCm-sN2RgiknSQvIsqYwqnAs1KDJKw/viewform?usp=sf_link"
        className="button2"
      >
        {" "}
        RSVP Here
      </a>
    </HStack>
  );
};

export default NavBar;
