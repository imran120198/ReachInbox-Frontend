import {
  Box,
  Flex,
  Stack,
  Text,
  Select,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Reply from "./Reply";
import Delete from "./Delete";

const user = [
  {
    id: 3,
    fromName: "Shaw Adley",
    fromEmail: "@getmemeetings.com",
    toName: "",
    toEmail: "mitrajit2022@gmail.com",
    cc: null,
    bcc: null,
    threadId: 1,
    messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    subject:
      "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
    body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
    isRead: true,
    folder: "INBOX",
    uid: 594,
    sentAt: "2023-11-23T04:08:45.000Z",
    archivedAt: null,
    createdAt: "2023-11-23T07:38:46.000Z",
    updatedAt: "2023-11-23T07:38:46.000Z",
    deletedAt: null,
  },
  {
    id: 4,
    fromName: "Shaw Adley",
    fromEmail: "shaw@getmemeetings.com",
    toName: "",
    toEmail: "mitrajit2022@gmail.com",
    cc: null,
    bcc: null,
    threadId: 2,
    messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    subject: "Test mail",
    body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
    isRead: true,
    folder: "INBOX",
    uid: 594,
    sentAt: "2023-11-23T04:08:45.000Z",
    archivedAt: null,
    createdAt: "2023-11-23T07:38:46.000Z",
    updatedAt: "2023-11-23T07:38:46.000Z",
    deletedAt: null,
  },
];

const getEmailData = async (thread_id, token) => {
  try {
    let res = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (err) {
    console.log("get email data error:", err);
  }
};

const Emails = () => {
  const { colorMode } = useColorMode();
  const { thread_id } = useParams();
  const token = localStorage.getItem("token");

  const [data, setData] = useState(user);
  const [deleteBox, setDeleteBox] = useState(false);
  const [deletedThreadId, setDeletedThreadId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (thread_id && token) {
      // console.log(token, thread_id);
      getEmailData(thread_id, token).then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      });
    }
  }, [thread_id]);

  const handleShowDeleteBox = () => {
    setShowDeleteModal(!showDeleteModal); // Toggle the state to show or hide the delete modal
  };

  const handleDelete = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        setDeletedThreadId(thread_id);
        handleShowDeleteBox(); // Close the delete modal after successful deletion
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box textAlign="left" fontFamily="Open Sans">
      {/* Header */}
      <Flex
        borderBottom="1px"
        borderColor={colorMode == "black" ? "#D8D8D8" : "#343A40"}
        gap="8px"
        padding="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack w="49%" spacing="2px">
          <Text
            fontFamily="Open Sans"
            fontWeight="600"
            fontSize="16px"
            color={colorMode == "light" ? "#343A40" : "white"}
          >
            {data[0].fromName}
          </Text>
          <Text
            fontFamily="Open Sans"
            color={colorMode == "light" ? "rgba(52, 58, 64, 0.7)" : "#666666"}
            fontSize="14px"
          >
            {data[0].fromEmail}
          </Text>
        </Stack>
        <Flex
          width="48%"
          gap="14px"
          alignItems="center"
          fontSize="12px"
          fontFamily="Open Sans"
          fontWeight="600"
          justifyContent="end"
        >
          <Select
            w="fit-content"
            borderRadius="4px"
            padding="8px"
            color={colorMode == "light" ? "#172B4D" : "white"}
            borderColor={colorMode == "light" ? "#D8D8D8" : "#343A40"}
            bgColor={colorMode == "light" ? "white" : "#1F1F1F"}
            fontSize="14px"
          >
            <option value="meeting_completed">Meeting Completed</option>
          </Select>

          <Select
            width="fit-content"
            borderRadius="4px"
            padding="8px"
            color={colorMode == "light" ? "#172B4D" : "white"}
            borderColor={colorMode == "light" ? "#D8D8D8" : "#343A40"}
            bgColor={colorMode == "light" ? "white" : "#1F1F1F"}
            fontSize="14px"
          >
            <option value="move">Move</option>
          </Select>

          <Button
            borderRadius="4px"
            padding="8px"
            border="1px"
            borderColor={colorMode == "light" ? "#D8D8D8" : "#343A40"}
            bgColor={colorMode == "light" ? "white" : "#1F1F1F"}
            fontSize="12px"
          >
            ...
          </Button>
        </Flex>
      </Flex>

      {/* Content */}

      {data &&
        data.map((user, i) => (
          <Stack
            key={i}
            textAlign="left"
            spacing="18px"
            margin="40px 21px"
            padding="12px 16px"
            borderRadius="4px"
            border="1px"
            borderColor={colorMode == "light" ? "#D8D8D8" : "#343A40"}
            bgColor={colorMode == "light" ? "white" : "#141517"}
          >
            <Stack>
              <Flex justifyContent="space-between">
                <Text
                  fontFamily={"Open Sans"}
                  fontWeight="700"
                  fontSize="16px"
                  color={colorMode == "light" ? "black" : "#F8FAFC"}
                >
                  {user.subject}
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontWeight={"400"}
                  fontSize="14px"
                  color={colorMode == "light" ? "#637381" : "#7F7F7F"}
                >
                  {user.sentAt}
                </Text>
              </Flex>

              <Flex
                gap="5px"
                fontFamily="Open Sans"
                fontWeight={"400"}
                fontSize="16px"
                color={colorMode == "light" ? "#637381" : "#7F7F7F"}
              >
                <Text>from: {user.fromEmail}</Text>
                {user.cc &&
                  user.cc.map((item, i) => <Text key={i}>cc: {item}</Text>)}
              </Flex>
              <Text
                fontFamily="Open Sans"
                fontWeight={"400"}
                fontSize="16px"
                color={colorMode == "light" ? "#637381" : "#7F7F7F"}
              >
                to: {user.toEmail}
              </Text>
            </Stack>
            <Box
              dangerouslySetInnerHTML={{ __html: user.body }}
              paddingLeft="1px"
              fontFamily={"Open Sans"}
              fontWeight={"400"}
              fontSize="16px"
              color={colorMode == "light" ? "#172B4D" : "#E1E0E0"}
            ></Box>
          </Stack>
        ))}
      <Box>
        <Reply threadId={thread_id} token={token} />
      </Box>

      <Box>
        {deleteBox ? (
          <Delete
            handleShowDeleteBox={handleShowDeleteBox}
            handleDelete={handleDelete}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Emails;
