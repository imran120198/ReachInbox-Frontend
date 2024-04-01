import React from "react";
import {
  Switch,
  Box,
  Text,
  Flex,
  Select,
  useColorMode,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="100%" h={"64px"}>
      <Flex
        w="100%"
        border="1px"
        borderLeft="0px"
        borderColor={colorMode === "light" ? "#D8D8D8" : "#343A40"}
        bgColor={colorMode === "light" ? "#FFFFFF" : "#1F1F1F"}
        justifyContent="space-between"
        alignItems="center"
        padding="24px"
      >
        <Text
          color={colorMode === "light" ? "#5B5F66" : "#FFFFFF"}
          fontFamily="Open Sans"
          fontWeight="700"
          fontSize={"22px"}
        >
          Onebox
        </Text>
        <Flex alignItems="center" gap="22px">
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="fit-content"
            border="1px"
            borderRadius="80px"
            bgColor={colorMode === "light" ? "#E9EAEC" : "#222426"}
            borderColor={colorMode === "light" ? "#DADEE1" : "#343A40"}
            padding="3px 5px"
          >
            <FormLabel htmlFor="change-theme" mb="0">
              {colorMode === "black" ? (
                <MdLightMode color="#E8C364" />
              ) : (
                <MdOutlineDarkMode color="#E8C364" />
              )}
            </FormLabel>
            <Switch
              colorScheme={"black"}
              id="change-theme"
              onChange={toggleColorMode}
            />
          </FormControl>

          <Select border={"none"}>
            <option value="tims_workspace">Tim's Workspace</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
