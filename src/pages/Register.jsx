import { Box, useColorModeValue } from "@chakra-ui/react";
import Form from "src/components/Form";
import Dashboard from "src/components/Dashboard";

const Register = () => {
  return (
    <>
      <Dashboard>
        <Box bg={useColorModeValue("white", "gray.900")} w="50%" p={4}>
          <Form />
        </Box>
      </Dashboard>
    </>
  );
};

export default Register;
