import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { MdDashboard } from "react-icons/md";
import { HiMiniUsers, HiMiniUserPlus } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Sidebar = ({ onClose }) => {
  return (
    <>
      {" "}
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            delman.io
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Link to="/">
          <Navbar icon={<MdDashboard />}>Dashboard</Navbar>
        </Link>
        <Link to="/users">
          <Navbar icon={<HiMiniUsers />}> Users</Navbar>
        </Link>
        <Link to="/register">
          <Navbar icon={<HiMiniUserPlus />}>Registration</Navbar>
        </Link>
        <Link to="/search-user">
          <Navbar icon={<HiOutlineSearch />}>Search</Navbar>
        </Link>
      </Box>
    </>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
