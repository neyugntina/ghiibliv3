import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Button,
  Box,
  Checkbox,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
    // <>
    //   <Formik
    //     initialValues={{ Username: "", Password: "" }}
    //     onSubmit={(values, actions) => {
    //       setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         actions.setSubmitting(false);
    //       }, 1000);
    //     }}
    //   >
    //     {(props) => (
    //       <Form>
    //         <Field name="name" validate={validateName}>
    //           {({ field, form }) => (
    //             <FormControl isInvalid={form.errors.name && form.touched.name}>
    //               <FormLabel>First name</FormLabel>
    //               <Input {...field} placeholder="name" />
    //               <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    //             </FormControl>
    //           )}
    //         </Field>
    //         <Field name="name" validate={validateName}>
    //           {({ field, form }) => (
    //             <FormControl isInvalid={form.errors.name && form.touched.name}>
    //               <FormLabel>First name</FormLabel>
    //               <Input {...field} placeholder="name" />
    //               <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    //             </FormControl>
    //           )}
    //         </Field>
    //         <Button
    //           mt={4}
    //           colorScheme="teal"
    //           isLoading={props.isSubmitting}
    //           type="submit"
    //           onClick={() => router.push("/home")}
    //         >
    //           Login
    //         </Button>
    //       </Form>
    //     )}
    //   </Formik>
    // </>
  );
}
