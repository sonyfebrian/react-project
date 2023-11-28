import { Box, useColorModeValue } from "@chakra-ui/react";
import Dashboard from "src/components/Dashboard";
import SearchBar from "src/components/ui/SearchBar";

const SearchUser = () => {
  return (
    <>
      <Dashboard>
        <Box bg={useColorModeValue("white", "gray.900")} w="50%" p={4}>
          <SearchBar />
        </Box>
      </Dashboard>
    </>
  );
};

export default SearchUser;
