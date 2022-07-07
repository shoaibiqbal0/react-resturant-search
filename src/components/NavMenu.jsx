import { Box, Button, Flex, Slide } from "@chakra-ui/react";
import React from "react";

const NavMenu = ({ isOpen, onToggle }) => {
  return (
    <>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Button onClick={onToggle}>Click Me</Button>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        ></Box>
      </Slide>
    </>
  );
};

export default NavMenu;
