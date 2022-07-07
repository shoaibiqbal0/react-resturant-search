import { Box, Button, Slide } from "@chakra-ui/react";
import { GrClose } from "react-icons";
import React from "react";

const NavMenu = ({ isOpen, onToggle }) => {
  return (
    <>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          color="white"
          bg="hsl(0 0% 80% / 0.1)"
          backdropFilter="blur(1rem)"
          shadow="md"
          maxW="10rem"
          minH="100%"
        >
          <Button onClick={onToggle}>Click Me</Button>
        </Box>
      </Slide>
    </>
  );
};

export default NavMenu;
