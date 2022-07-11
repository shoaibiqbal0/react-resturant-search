import {
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

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <HStack py="3" px="5">
        <IconButton
          size="lg"
          icon={<Image w="70%" onClick={onToggle} m="-5" src={hamburger} />}
        />
        <Spacer />
        <IconButton size="lg" icon={<FaSun size="50%" />} />
      </HStack>
      <NavMenu isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};

export default NavBar;
