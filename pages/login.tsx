import { Box, Button, Flex, FormControl, FormLabel, Input, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';




const login: FC = () => (
    <Flex h="100vh" background="gray.50" alignItems="center" direction="column" justifyContent="center">
        <>
            {/* <NextImage src="/logo.png" width={200} height={200} /> */}

            <Box background="white" p={6} rounded={5} mb={0.5} flexDirection="column" boxShadow="base" display="flex" width="600px" borderBottomRadius="none">
                <Text textAlign="center" fontSize="24px" fontWeight="bold">Log In</Text>
            </Box>
            <Box background="white" p={6} rounded={5} flexDirection="column" boxShadow="base" display="flex" width="600px" borderTopRadius="none">
                <FormControl id="email" mb={4}>
                    <FormLabel fontSize="16px">Email</FormLabel>
                    <Input focusBorderColor="purple.500" type="email" placeholder="email@example.com" />
                </FormControl>

                <FormControl id="password">
                    <FormLabel fontSize="16px">Password</FormLabel>
                    <Input focusBorderColor="purple.500" type="password" placeholder="********" />
                    <Box textAlign="right">
                        <NextLink href="/signup" >
                            <Link fontSize="12px" textAlign="right" fontWeight="bold" color="purple.500" >
                                Forgot Password
                            </Link>
                        </NextLink>
                    </Box>
                </FormControl>

                <Button mt={8} colorScheme="purple">Log In</Button>
            </Box>
        </>
    </Flex>
);

export default login;
