import {
  Flex,
  HStack,
  IconButton,
  Image,
  ScaleFade,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import hamburger from "../assets/hamburger.png";
import NavMenu from "./NavMenu";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconBase } from "react-icons/lib";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <HStack py="3" px="5">
        <ScaleFade in={true} whileHover={{ scale: 1.2 }}>
          <Image
            onClick={onToggle}
            _hover={{ cursor: "pointer" }}
            w={["40%", "50%", "60%"]}
            src={hamburger}
          />
        </ScaleFade>
        <Spacer />
        <IconButton></IconButton>
      </HStack>

      <NavMenu isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};

export default NavBar;
