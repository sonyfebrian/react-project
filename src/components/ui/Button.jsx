import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ButtonUi = ({
  mt = 4,
  colorScheme = "teal",
  isLoading,
  children,
  ...rest
}) => {
  return (
    <Button
      mt={mt}
      colorScheme={colorScheme}
      isLoading={isLoading}
      type="submit"
      {...rest}
    >
      {children}
    </Button>
  );
};

ButtonUi.propTypes = {
  mt: PropTypes.number,
  colorScheme: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonUi;
