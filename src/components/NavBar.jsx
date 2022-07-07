import {
  Flex,
  HStack,
  Image,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import hamburger from "../assets/hamburger.png";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex boxShadow="base">
        <HStack py="3" px="5">
          <ScaleFade in={true} whileHover={{ scale: 1.2 }}>
            <Image
              onClick={onToggle}
              _hover={{ cursor: "pointer" }}
              w={["40%", "50%", "60%"]}
              src={hamburger}
            />
          </ScaleFade>
        </HStack>
      </Flex>
      <NavMenu isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};

export default NavBar;
