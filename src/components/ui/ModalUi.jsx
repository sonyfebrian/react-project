import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
} from "@chakra-ui/react";
import ButtonUi from "./Button";
import PropTypes from "prop-types";

import { FixedSizeList } from "react-window";

const ModalUi = ({ isOpen, onClose, userDetails, handleDeleteUser }) => {
  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          User Details
          <Text fontSize="xs" mb="1rem">
            This is inquiry about user with email : {userDetails.email}
          </Text>
          <Divider mb="5px" mt="10px" />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FixedSizeList
            height={300}
            itemCount={1}
            itemSize={30}
            width={"100%"}
          >
            {({ style }) => (
              <div style={style}>
                <Text fontWeight="bold" mb="2px">
                  Id: {userDetails.id}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Name: {userDetails.name}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Email: {userDetails.email}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Country Name: {userDetails.country_name}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Device Id: {userDetails.device_id}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Bitcoin Address: {userDetails.bitcoin_address}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Avatar: {userDetails.avatar}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Login Ip: {userDetails.login_ip}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Active Device Mac: {userDetails.active_device_mac}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Notes: {userDetails.notes}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Age: {userDetails.age}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Referral Id: {userDetails.referral_id}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Locale: {userDetails.locale}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Favorite Music: {userDetails.favorite_music}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Phone Number: {userDetails.phone_number}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Twitter Username: {userDetails.twitter_username}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Job: {userDetails.job}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Invoice Email Address: {userDetails.invoice_email_address}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Hmac Secret: {userDetails.hmac_secret}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Favorite Quote: {userDetails.favorite_quote}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Primary Color: {userDetails.primary_color}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Secondary Color : {userDetails.secondary_color}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Material: {userDetails.material}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Shipping Address: {userDetails.shipping_address}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Zip Code: {userDetails.zip_code}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Latitude: {userDetails.latitude}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Longitude: {userDetails.longitude}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Favorite Animal: {userDetails.favorite_animal}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  App Version: {userDetails.app_version}
                </Text>
                <Text fontWeight="bold" mb="2px">
                  Timezone: {userDetails.timezone}
                </Text>
              </div>
            )}
          </FixedSizeList>
        </ModalBody>

        <ModalFooter>
          <ButtonUi colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </ButtonUi>
          <ButtonUi variant="ghost" onClick={handleDeleteUser}>
            Delete User
          </ButtonUi>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ModalUi.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userDetails: PropTypes.object,
  handleDeleteUser: PropTypes.func,
};

export default ModalUi;
