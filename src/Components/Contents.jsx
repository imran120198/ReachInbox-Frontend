import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import NoMessage from "./NoMessage";

const Contents = () => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Box>
        <NoMessage/>
      </Box>
    </div>
  );
};

export default Contents;
