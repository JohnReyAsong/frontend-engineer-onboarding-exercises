import { useMutation } from '@apollo/client';
import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from 'lib/schema/validation';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpInput } from 'types/types';
import { SIGN_UP } from '../../lib/queries/mutation';

// interface FormInputs {
//   firstname: string;
//   lastname: string;
//   emailAddress: string;
//   password: string;
//   confirmPassword: string;
// }

const SignUpComponent: FC = () => {
  const router = useRouter();
  const toast = useToast();

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: () => {
      toast({
        title: 'Account Created Successfully. Redirecting',
        status: 'success',
        isClosable: true,
        position: 'bottom-right',
      });

      setTimeout(() => {
        void router.push('/login');
      }, 1);
    },
    onError: (e) => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
      });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({ resolver: yupResolver(SignupSchema) });

  return (
    <Flex h="100vh" background="gray.50" alignItems="center" direction="column" justifyContent="center" py={10}>
      <Container maxW="container.md">
        <Box
          background="white"
          p={6}
          rounded={5}
          mb={0.5}
          flexDirection="column"
          boxShadow="base"
          display="flex"
          borderBottomRadius="none"
        >
          <Text textAlign="center" fontSize="24px" fontWeight="bold">
            Sign Up
          </Text>
        </Box>

        <form
          onSubmit={handleSubmit((data: SignUpInput): void => {
            signUp({ variables: { input: data } })
              .then()
              .catch((err) => err);
          })}
        >
          <Box
            background="white"
            p={6}
            rounded={5}
            flexDirection="column"
            boxShadow="base"
            display="flex"
            borderTopRadius="none"
          >
            <FormControl id="firstname" mb={4}>
              <FormLabel fontSize="16px">First name</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="text"
                placeholder="Enter first name"
                {...register('firstname')}
              />
              <Text color="red" fontSize="14px">
                {errors.firstname?.message}
              </Text>
            </FormControl>

            <FormControl id="lastname" mb={4}>
              <FormLabel fontSize="16px">Last name</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="text"
                placeholder="Enter last name"
                {...register('lastname')}
              />
              <Text color="red" fontSize="14px">
                {errors.lastname?.message}
              </Text>
            </FormControl>

            <FormControl id="email" mb={4}>
              <FormLabel fontSize="16px">Email</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="email"
                placeholder="email@example.com"
                {...register('emailAddress')}
              />
              <Text color="red" fontSize="14px">
                {errors.emailAddress?.message}
              </Text>
            </FormControl>

            <FormControl id="password" mb={4}>
              <FormLabel fontSize="16px">Password</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="password"
                placeholder="Enter password"
                {...register('password')}
              />
              <Text color="red" fontSize="14px">
                {errors.password?.message}
              </Text>
            </FormControl>

            <FormControl id="confirmpassword">
              <FormLabel fontSize="16px">Confirm Password</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="password"
                placeholder="Confirm password"
                {...register('password')}
              />
              <Text color="red" fontSize="14px">
                {errors.password?.message}
              </Text>
            </FormControl>

            <Button mt={8} colorScheme="purple" type="submit">
              Log In
            </Button>
          </Box>
        </form>
      </Container>
    </Flex>
  );
};
export default SignUpComponent;
