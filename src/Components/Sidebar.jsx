import React from "react";
import { Box, Image, Text, Flex, useColorMode, Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdPersonSearch,
  MdMail,
  MdViewList,
  MdBarChart,
} from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import CompanyLogo from "../Assets/CompanyLogo.svg";
import CompanyLogoBlack from "../Assets/CompanyLogoBlack.svg";
import { Link } from "react-router-dom";

const Iconlist = [
  { name: "Home", icon: MdHome },
  { name: "PersonSearch", icon: MdPersonSearch },
  { name: "Mail", icon: MdMail },
  { name: "Send", icon: IoIosSend },
  { name: "ViewList", icon: MdViewList },
  { name: "Inbox", icon: FaInbox },
  { name: "BarChart", icon: MdBarChart },
];

const Sidebar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      width="4%"
      minHeight="100vh"
      direction="column"
      borderRight="1px"
      borderColor={colorMode == "light" ? "#D8D8D8" : "#343A40"}
      padding="0px 4px"
    >
      <Box w="48px" h="90px" borderRadius="2px">
        <Box
          w="48px"
          h="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/home">
            <Image
              w="26px"
              h="24px"
              borderRadius="2px"
              src={colorMode == "light" ? CompanyLogoBlack : CompanyLogo}
            />
          </Link>
        </Box>
      </Box>

      <Box w="48px" h="85vh">
        <Flex
          w="48px"
          h="85vh"
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="32px"
          boxSize="borderBox"
          padding="16px 8px"
        >
          {Iconlist.map((item, i) => (
            <Box key={i}>
              <Link to="/inbox">
                <Icon
                  w="28px"
                  h="28px"
                  as={item.icon}
                  color={colorMode == "light" ? "#919EAB" : "#AEAEAE"}
                  cursor="pointer"
                />
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box w="48px" padding="12px 8px">
        <Box
          width="32px"
          height="32px"
          borderRadius="50%"
          bgColor="#054F31"
          display="flex"
          justifyContent="center"
          alignItems="center"
          pos="fixed"
          bottom="7px"
        >
          <Text color={colorMode == "light" ? "white" : "white"}>AS</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Sidebar;
