import { Box, Button, IconButton, Slide } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
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
          <IconButton
            p="5"
            icon={<GrClose />}
            variant="link"
            onClick={onToggle}
          >
            Click Me
          </IconButton>
        </Box>
      </Slide>
    </>
  );
};

export default NavMenu;
