import { useState, useCallback, useEffect } from "react";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Divider,
  Wrap,
  WrapItem,
  IconButton,
  Center,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  getUserDetails,
  deleteUser,
} from "src/store/slices/UsersSlice";
import ButtonUi from "./Button";
import ModalUi from "./ModalUi";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const isSubmitting = false;

  const datas = useSelector((state) => state.user.usersData);

  const initFetch = useCallback(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);
  console.log(datas, " searchResults");
  console.log(searchResults, " searchResults");

  const handleSearch = async () => {
    try {
      const results = datas.filter((user) => user.email.includes(searchTerm));

      if (results.length === 0) {
        console.warn(`User with email '${searchTerm}' not found.`);
      } else {
        console.log(results, "searchResults");
      }
      setSearchResults(results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    console.log("Clear search button clicked");
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleDeleteUser = async () => {
    try {
      if (userDetails && userDetails.id) {
        await deleteUser(userDetails.id);

        onClose();
        setUserDetails(null);
        console.log("User deleted successfully.");
      } else {
        console.warn("No user selected for deletion.");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleViewProfile = async (userId) => {
    try {
      const userDetails = await dispatch(getUserDetails(userId));

      const user = userDetails.payload;
      setUserDetails(user);
      console.log("User details:", userDetails);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <FaSearch color="green.500" />
          </InputLeftElement>

          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {/* <InputRightElement>
          <IoIosCloseCircle color="green.500" />
        </InputRightElement> */}
          {searchTerm && (
            <IconButton
              variant="ghost"
              aria-label="Search database"
              icon={<IoIosCloseCircle color="green.500" />}
              onClick={handleClearSearch}
            />
          )}
        </InputGroup>
      </Stack>

      {searchResults.length > 0 ? (
        <Wrap spacing="30px" mt="10px" borderWidth="1px" align="center">
          <WrapItem>
            <Center w="460px">
              {searchResults.map((user, i) => (
                <div key={i}>
                  <Text fontSize="2xl">{user.name}</Text>
                  <Text fontSize="sm">{user.email}</Text>
                  <Divider mb="5px" mt="10px" />
                  <ButtonUi
                    mb={10}
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    onClick={() => {
                      onOpen();
                      handleViewProfile(user.id);
                    }}
                  >
                    View User Profile
                  </ButtonUi>
                </div>
              ))}
            </Center>
            {userDetails && (
              <ModalUi
                isOpen={isOpen}
                onClose={onClose}
                userDetails={userDetails}
                handleDeleteUser={handleDeleteUser}
              />
            )}
          </WrapItem>
        </Wrap>
      ) : (
        <ButtonUi
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          onClick={handleSearch}
          isDisabled={!searchTerm.trim()}
        >
          Search
        </ButtonUi>
      )}
    </>
  );
};

export default SearchBar;
