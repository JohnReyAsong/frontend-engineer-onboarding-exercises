import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';


const Navbar: FC = () => (
    <Flex alignItems="center" px={80} zIndex={2} boxShadow="base" background="white" pos="fixed" width="100%">
        <NextImage src="/workflow.png" width={40} height={40} />

        <Text fontSize="22px" ml={3} mr={5} fontWeight="bold">
            workflow
        </Text>
        <Box borderBottomWidth="3px" borderBottomColor="#5146E6" py={5}>
            <Text fontSize="16px" textAlign="center" >
                Products
            </Text>
        </Box>

        <Spacer />
        <Box>
            <NextLink href="/login">
                <Button mr="4" variant="outline">
                    Log In
                </Button>
            </NextLink>

            <NextLink href="/signup">
                <Button colorScheme="purple">Sign Up</Button>

            </NextLink>
        </Box>
    </Flex>
)

export default Navbar
