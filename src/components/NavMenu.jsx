import { Box, IconButton, SimpleGrid, Slide, Text } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import React from "react";

const NavMenu = ({ isOpen, onToggle }) => {
  return (
    <>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          bg="hsl(0 0% 80% / 0.1)"
          backdropFilter="blur(1rem)"
          shadow="md"
          maxW="15rem"
          minH="100vh"
        >
          <IconButton
            p="7"
            icon={<GrClose size="1.5rem" />}
            variant="link"
            onClick={onToggle}
          >
            Click Me
          </IconButton>
          <SimpleGrid p="7" spacingY="5">
            <Text fontSize="2xl">Home</Text>
            <Text fontSize="2xl">Contact</Text>
            <Text fontSize="2xl">About</Text>
          </SimpleGrid>
        </Box>
      </Slide>
    </>
  );
};

export default NavMenu;
