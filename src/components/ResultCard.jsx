import {
  Badge,
  Box,
  HStack,
  Image,
  ScaleFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ResultCard = ({ searchItem }) => {
  const badgeStyles = {
    borderRadius: "7px",
    fontSize: "0.6rem",
    textTransform: "capitalize",
    fontWeight: "normal",
  };
  return (
    <ScaleFade initialScale={0.9} in={true} whileHover={{ scale: 1.01 }}>
      <Box
        _hover={{
          backgroundColor: "hsla(0, 50%, 98%, 0.5)",
          cursor: "pointer",
          borderRadius: "5",
        }}
        boxShadow="lg"
      >
        <HStack p="1" align="flex-start" py="2">
          <Image src={searchItem?.image_url} maxW="5em" borderRadius="5" />
          <VStack spacing="0" w="100%" align="left">
            <Text w="100%" fontWeight="bold" fontSize="2xl">
              {searchItem?.name}
            </Text>
            <HStack w="100%">
              <Badge style={badgeStyles}>
                {searchItem?.categories[0]?.title}
              </Badge>
              <Badge style={badgeStyles}>
                {searchItem?.categories[1]?.title}
              </Badge>
              <Text fontSize="0.6rem">{searchItem?.price}</Text>
            </HStack>

            <HStack pt="4" spacing="0">
              <Text fontSize="0.8em">
                <strong>Rating:</strong>
              </Text>
              {[...Array(Math.floor(searchItem?.rating))].map((item, index) => {
                return <AiFillStar color="orange" as="span" key={index} />;
              })}
            </HStack>
            <HStack pt="1">
              <Text fontSize="0.8em">
                <strong>Phone:</strong>
              </Text>
              <Text textDecor="underline" textColor="blue.500" fontSize="0.8em">
                <a href={`tel:${searchItem?.phone}`}>{searchItem?.phone}</a>
              </Text>
            </HStack>
            <Text pt="1" fontSize="0.8em">
              <strong>Location: </strong>
              {searchItem?.location.address1}, {searchItem?.location.city}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </ScaleFade>
  );
};

export default ResultCard;
