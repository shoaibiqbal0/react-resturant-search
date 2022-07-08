import { Text, VStack } from "@chakra-ui/react";
import React from "react";

import textBg from "../assets/text-bg.png";

const MainText = () => {
  const subheadingFontSizes = ["2em", "3em", "4em"];
  return (
    <VStack py="1em">
      <Text
        bgSize="cover"
        bgClip="text"
        fontSize={["4.5em", "6em", "7em"]}
        fontWeight="extrabold"
        mb="-5"
      >
        WHERE
      </Text>
      <Text fontSize={subheadingFontSizes}>do you wanna</Text>
      <Text fontSize={subheadingFontSizes}>
        <strong>EAT</strong> today?
      </Text>
    </VStack>
  );
};

export default MainText;
