import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { FC } from 'react';



const signup: FC = () => (
    <Flex h="100vh" background="gray.50" alignItems="center" direction="column" justifyContent="center">
        <>
            {/* <NextImage src="/logo.png" width={200} height={200} /> */}

            <Box background="white" p={6} rounded={5} mb={0.5} flexDirection="column" boxShadow="base" display="flex" width="600px" borderBottomRadius="none">
                <Text textAlign="center" fontSize="24px" fontWeight="bold">Sign Up</Text>
            </Box>
            <Box background="white" p={6} rounded={5} flexDirection="column" boxShadow="base" display="flex" width="600px" borderTopRadius="none">
                <FormControl id="firstname" mb={4}>
                    <FormLabel fontSize="16px">First name</FormLabel>
                    <Input focusBorderColor="purple.500" type="text" placeholder="Enter first name" />
                </FormControl>

                <FormControl id="lastname" mb={4}>
                    <FormLabel fontSize="16px">Last name</FormLabel>
                    <Input focusBorderColor="purple.500" type="text" placeholder="Enter last name" />
                </FormControl>

                <FormControl id="email" mb={4}>
                    <FormLabel fontSize="16px">Email</FormLabel>
                    <Input focusBorderColor="purple.500" type="email" placeholder="email@example.com" />
                </FormControl>

                <FormControl id="password">
                    <FormLabel fontSize="16px">Password</FormLabel>
                    <Input focusBorderColor="purple.500" type="password" placeholder="Enter password" />
                </FormControl>

                <FormControl id="confirmpassword">
                    <FormLabel fontSize="16px">Confirm Password</FormLabel>
                    <Input focusBorderColor="purple.500" type="password" placeholder="Confirm password" />
                </FormControl>

                <Button mt={8} colorScheme="purple">Log In</Button>
            </Box>
        </>
    </Flex>
)

export default signup
