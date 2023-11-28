import { Box, Flex, Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Navbar = ({ icon, children, onClick }) => {
  return (
    <Box
      style={{ textDecoration: "none" }}
      onClick={onClick}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="1"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
          >
            {icon}
          </Icon>
        )}
        {children}
      </Flex>
    </Box>
  );
};

Navbar.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Navbar;
