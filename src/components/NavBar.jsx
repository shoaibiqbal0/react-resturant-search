import { Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import hamburger from "../assets/hamburger.png";

const NavBar = () => {
  return (
    <Flex boxShadow="base">
      <HStack p="3">
        <Image w="70%" src={hamburger} />
      </HStack>
    </Flex>
  );
};

export default NavBar;
