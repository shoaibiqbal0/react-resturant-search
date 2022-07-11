import {
  HStack,
  IconButton,
  Image,
  Spacer,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import hamburger from "../assets/hamburger.png";
import NavMenu from "./NavMenu";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack py="3" px="5">
        <IconButton
          variant="ghost"
          size="lg"
          icon={<Image w="80%" onClick={onToggle} m="-5" src={hamburger} />}
        />
        <Spacer />
        <IconButton
          variant="ghost"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        />
      </HStack>
      <NavMenu isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};

export default NavBar;
