import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const MainText = () => {
  const subheadingFontSizes = ["2em", "3em", "4em"];
  return (
    <VStack py="1em">
      <Text
        fontSize={["4.5em", "6em", "7em"]}
        fontWeight="extrabold"
        mb="-5"
      >
        WHERE
      </Text>
      <Text
        bgGradient="linear-gradient(to bottom right, red, yellow)"
        bgClip="text"
        fontSize={subheadingFontSizes}
      >
        do you wanna
      </Text>
      <Text
        bgGradient="radial-gradient(circle, rgba(142,8,79,1) 0%, rgba(255,0,172,1) 100%)"
        bgClip="text"
        fontSize={subheadingFontSizes}
      >
        <strong>EAT</strong> today?
      </Text>
    </VStack>
  );
};

export default MainText;
