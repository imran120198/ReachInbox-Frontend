import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import SideInbox from "../Components/SideInbox";
import Emails from "../Components/Emails";
import Details from "../Components/Details";
import axios from "axios";
import Navbar from "../Components/Navbar";

const fetchData = async (token) => {
  try {
    const res = await axios(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Inbox = () => {
  const [data, setData] = useState(null);
  const token =
    new URLSearchParams(window.location.search).get("token") ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2hhaGFuZXByaXlhbmthczAxQGdtYWlsLmNvbSIsImlkIjo5LCJmaXJzdE5hbWUiOiJQcml5YW5rYSIsImxhc3ROYW1lIjoiU2hhaGFuZSJ9LCJpYXQiOjE3MTE1MTA3NDEsImV4cCI6MTc0MzA0Njc0MX0.y9LmDEUdIipLhK-jvH2uFdnaQCfXQ1FbDgxmElWTuzU";

  localStorage.setItem("token", token);

  useEffect(() => {
    if (token) {
      fetchData(token)
        .then((res) => {
          setData(res.data.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);
  const { colorMode } = useColorMode();

  return (
    <div>
      <Flex>
        <Sidebar />
        <Box w={"96%"}>
          <Navbar />
          <Flex mt={"27px"}>
            <SideInbox emails={data} />
            <Box w="60%" bgColor={colorMode === "light" ? "White" : "black"}>
              <Emails />
            </Box>
            <Details data={data} />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Inbox;
