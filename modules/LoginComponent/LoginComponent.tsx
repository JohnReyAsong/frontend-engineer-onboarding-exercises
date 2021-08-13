import { useMutation } from '@apollo/client';
import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Link, Text, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from 'lib/schema/validation';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AuthenticateInput } from 'types/types';
import { LOGIN } from '../../lib/queries/mutation';
import { userLogin } from '../../store/userAuthentication';

const LoginComponent: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateInput>({ resolver: yupResolver(LoginSchema) });

  const [login] = useMutation(LOGIN, {
    onCompleted: (e) => {
      dispatch(userLogin(e.authenticate.token));
      toast({
        title: 'Log In Successful. Redirecting',
        status: 'success',
        isClosable: true,
        position: 'bottom-right',
      });

      setTimeout(() => {
        void router.push('/product/list');
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

  return (
    <Flex height="100vh" background="gray.50" alignItems="center" justifyContent="center">
      <Container display="flex" maxW="container.md" flexDirection="column">
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
            Log In
          </Text>
        </Box>
        <form
          onSubmit={handleSubmit((data: AuthenticateInput): void => {
            login({ variables: { input: data } })
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

            <FormControl id="password">
              <FormLabel fontSize="16px">Password</FormLabel>
              <Input focusBorderColor="purple.500" type="password" placeholder="********" {...register('password')} />
              <Text color="red" fontSize="14px">
                {errors.password?.message}
              </Text>
              {/* <Input focusBorderColor="purple.500" type="password" placeholder="********" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} /> */}
              <Box textAlign="right">
                <NextLink href="/signup">
                  <Link fontSize="12px" textAlign="right" fontWeight="bold" color="purple.500">
                    Forgot Password
                  </Link>
                </NextLink>
              </Box>
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

export default LoginComponent;
