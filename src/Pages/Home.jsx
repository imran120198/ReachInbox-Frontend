import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Contents from "../Components/Contents";

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

const Home = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const token =
    new URLSearchParams(location.search).get("token") ||
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
  return (
    <Flex>
      <Sidebar />
      <Box w={"96%"}>
        <Navbar />
        <Contents data={data} />
      </Box>
    </Flex>
  );
};

export default Home;
