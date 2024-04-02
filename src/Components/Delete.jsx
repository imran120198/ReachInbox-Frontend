import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Flex, Text, Button, useColorMode } from "@chakra-ui/react";

function Delete({ handleShowDeleteBox }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [threadId, setThreadId] = useState(searchParams.get("threadId"));
  const [deletedThreadId, setDeletedThreadId] = useState(null);
  const { colorMode } = useColorMode();

  const handleDelete = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        setDeletedThreadId(threadId);
      })
      .catch((err) => {
        console.log(err);
      });

    handleShowDeleteBox();
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={
        colorMode === "black" ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.8)"
      }
      zIndex="90"
    >
      <Box
        className="w-[443px] opacity-100 h-[249px] border border-[#bbb] dark:border-[#313030] rounded bg-[#f6f6f6] dark:bg-[#060606] flex flex-col justify-center items-center"
        zIndex="99999999999"
      >
        <Text className="text-2xl font-bold my-5">Are you sure?</Text>
        <Text className="text-[13px] text-[#bbb]">
          Your selected email will be deleted.
        </Text>
        <Flex justify="space-between" gap="5" mt="10">
          <Button
            onClick={handleShowDeleteBox}
            rounded="lg"
            py="2"
            px="8"
            border="1px"
            borderColor={colorMode === "light" ? "#bbb" : "#2b2b2b"}
            bg={colorMode === "light" ? "#e4e4e4" : "#1a1a1a"}
            color={colorMode === "light" ? "#2b2b2b" : "#e4e4e4"}
            cursor="pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            rounded="lg"
            py="2"
            px="8"
            border="1px"
            borderColor="#bbb"
            bgGradient="linear(to-r, #a91919, #fa5252)"
            color="white"
            cursor="pointer"
          >
            Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Delete;
