import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ButtonUi = ({
  mt = 4,
  colorScheme = "teal",

  children,
  ...rest
}) => {
  return (
    <Button mt={mt} colorScheme={colorScheme} type="submit" {...rest}>
      {children}
    </Button>
  );
};

ButtonUi.propTypes = {
  mt: PropTypes.number,
  colorScheme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonUi;
