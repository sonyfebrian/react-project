import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  // Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createUser } from "src/store/slices/UsersSlice";
import { toast } from "react-toastify";
import ButtonUi from "./ui/Button";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // function onSubmit(values) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       alert(JSON.stringify(values, null, 2));
  //       resolve();
  //     }, 3000);
  //   });
  // }
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    try {
      await dispatch(createUser(values));

      toast.success("User created successfully!");
      reset();
    } catch (error) {
      console.error("Error creating user:", error);

      toast.error("Error creating user");
    }
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
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="email" mt={2}>
          Email
        </FormLabel>
        <Input
          id="email"
          placeholder="email"
          {...register("email", {
            required: "Please provide email",
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <ButtonUi isLoading={isSubmitting} type="submit">
        Submit User
      </ButtonUi>
    </form>
  );
};

export default Form;
