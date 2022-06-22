import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import MainImage from "../assets/mainImage.png";

const MainText = () => {
  const subheadingFontSizes = ["2em", "3em", "4em"];
  const imageSizes = ["10em", "15em", "19em"];
  return (
    <VStack py="5em">
      <Text fontSize={["5em", "6em", "7em"]} fontWeight="extrabold" mb="-5">
        WHERE
      </Text>
      <Text fontSize={subheadingFontSizes}>do you wanna</Text>
      <Text fontSize={subheadingFontSizes}>
        <strong>EAT</strong> today?
      </Text>
      <Image pt="1em" w={imageSizes} src={MainImage} />
    </VStack>
  );
};

export default MainText;
