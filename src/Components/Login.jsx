import React from "react";
import {
  Box,
  Image,
  Stack,
  Text,
  Button,
  Link,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../Assets/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { colorMode } = useColorMode();
  return (
    <div>
      {/* Header */}
      <Box>
        <Center
          p="10px 100px"
          w={"100%"}
          h={"64px"}
          borderBottom={"1px"}
          borderColor="#25262B"
          pos={"fixed"}
          top={0}
          bgColor="black"
        >
          <Box>
            <Image src={logo} alt="logo" />
          </Box>
        </Center>

        {/* Login Section */}
        <Center minH="95vh" bgColor={"black"}>
          <Stack
            w={"460px"}
            height={"312px"}
            m={"auto"}
            p={"24px 40px 40px 40px"}
            spacing={"48px"}
            border="1px"
            borderRadius={"17px"}
            borderColor={"#343A40"}
            bgGradient={"linear(to-t, #111214, #121212)"}
          >
            <Stack spacing={"24px"}>
              <Text fontSize={"24px"} color="white">
                Create a new account
              </Text>

              <Button
                border={"1px solid #707172"}
                display={"Flex"}
                gap={"10px"}
                p="8px 16px"
                borderRadius={"4px"}
                bgGradient={"linear(to-t, #111214, #121212)"}
                color="#CCCCCC"
                fontFamily="Open Sans"
                fontWeight="400"
                _hover={{
                  bgGradient: "linear(to-t, #111214, #121212)",
                }}
              >
                <FcGoogle />
                <Link
                  textDecoration={"none"}
                  href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend-app.netlify.app/onebox"
                >
                  Sign Up with Google
                </Link>
              </Button>
            </Stack>

            <Stack spacing={"24px"} textAlign="center" alignItem="center">
              <Button
                w="50%"
                margin="auto"
                bgGradient="linear(to-r, #4B63DD, #0524BF)"
                borderRadius="4px"
                padding="13px 35px"
                color={colorMode === "light" ? "white" : "white"}
                fontSize={"16px"}
                _hover={{
                  backgroundColor: "#0524BF",
                }}
              >
                Create an Account
              </Button>
              <Text
                fontSize={"18px"}
                color={"#909296"}
                fontFamily={"Open Sans"}
                fontWeight={"400"}
              >
                Already have an account?{" "}
                <Link color={"white"} href="/">
                  Sign In
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Center>

        {/* Footer Section */}
        <Center bgColor={"#5C5F66"} height={"33px"}>
          <Text>© 2023 Reachinbox. All rights reserved.</Text>
        </Center>
      </Box>
    </div>
  );
};

export default Login;
