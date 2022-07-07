import { Box, Button, Flex, Slide } from "@chakra-ui/react";
import React from "react";

const NavMenu = ({ isOpen, onToggle }) => {
  return (
    <>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <Box color="white" bg="teal.500" shadow="md" maxW="10rem" minH="100%">
          <Button onClick={onToggle}>Click Me</Button>
        </Box>
      </Slide>
    </>
  );
};

export default NavMenu;
