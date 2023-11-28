import { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "src/store/slices/UsersSlice";
import { toast } from "react-toastify";
import ButtonUi from "./ui/Button";
import { getUsersData } from "src/store/slices/UsersSlice";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const datas = useSelector((state) => state.user.usersData);

  const initFetch = useCallback(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const onSubmit = async (values) => {
    try {
      const emailExists = datas.some((user) => user.email === values.email);

      const filteredSuggestions = datas
        .filter((user) =>
          user.email.toLowerCase().includes(values.toLowerCase())
        )
        .map((user) => user.email);

      setSuggestions(filteredSuggestions);

      if (emailExists) {
        toast.error("Email already exists!");
      } else {
        await dispatch(createUser(values));

        toast.success("User created successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error creating user:", error);

      toast.error("Error creating user");
    }
  };

  const onSuggestionClick = (value) => {
    setInputValue(value);
    setSuggestions([]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "Please provide name",
          })}
        />
        <FormErrorMessage>
          {errors.name?.message && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email" mt={2}>
          Email
        </FormLabel>
        <Input
          id="email"
          placeholder="email"
          value={inputValue}
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
        />
        <FormErrorMessage>
          {errors.email?.message && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <ButtonUi type="submit" colorScheme="blue">
        Submit User
      </ButtonUi>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
              style={{ cursor: "pointer" }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Form;
