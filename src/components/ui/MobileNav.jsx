import {
  IconButton,
  Flex,
  useColorModeValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const MobileNav = ({ onOpen }) => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/") {
      return "Sales Dashboard";
    } else if (location.pathname === "/users") {
      return "Users Dashboard";
    } else if (location.pathname === "/register") {
      return "Users Registration";
    } else if (location.pathname === "/search-user") {
      return "Search User";
    } else {
      return "Dashboard";
    }
  };

  const getTitle = () => {
    if (location.pathname === "/") {
      return "List of Sales data";
    } else if (location.pathname === "/users") {
      return "List of users data";
    } else if (location.pathname === "/register") {
      return "Add new User";
    } else if (location.pathname === "/search-user") {
      return "Search existing user";
    } else {
      return "Dashboard";
    }
  };

  return (
    <>
      {" "}
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          delman.io
        </Text>

        <VStack
          display={{ base: "none", md: "flex" }}
          alignItems="flex-start"
          spacing="1px"
          ml="2"
        >
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            {getPageTitle()}
          </Text>
          <Text fontSize="xs" color="blue.600">
            {getTitle()}
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

MobileNav.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default MobileNav;
