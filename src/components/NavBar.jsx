import { Flex, HStack, Image, ScaleFade } from "@chakra-ui/react";
import React from "react";
import hamburger from "../assets/hamburger.png";

const NavBar = () => {
  return (
    <Flex boxShadow="base">
      <HStack py="3" px="5">
        <ScaleFade in={true} whileHover={{ scale: 1.1 }}>
          <Image
            _hover={{ cursor: "pointer" }}
            w={["50%", "60%", "70%"]}
            src={hamburger}
          />
        </ScaleFade>
      </HStack>
    </Flex>
  );
};

export default NavBar;
