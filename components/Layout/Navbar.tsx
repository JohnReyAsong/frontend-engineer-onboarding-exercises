import { Box, Button, Container, Spacer, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Navbar: FC = () => {
  const route = useRouter();
  const isProductListPath = route.asPath === '/product/list';

  return (
    <Box zIndex={2} pos="fixed" width="100%" boxShadow="base" background="white">
      <Container display="flex" maxW="container.xl" height="64px" alignItems="center">
        <NextImage src="/workflow.png" width={40} height={40} />

        <Text fontSize="22px" ml={3} fontWeight="bold" display={{ base: 'none', sm: 'flex' }}>
          workflow
        </Text>
        <NextLink href="/product/list">
          <Box
            borderBottomWidth={isProductListPath ? '3px' : ''}
            ml={5}
            borderBottomColor={isProductListPath ? '#5146E6' : ''}
            paddingTop="20px"
            paddingBottom="20px"
            cursor="default"
            _hover={{ borderBottomColor: '#5146E6', borderBottomWidth: '3px' }}
          >
            <Text fontSize="16px" textAlign="center">
              Products
            </Text>
          </Box>
        </NextLink>

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

        {/* <Box display={{ base: "flex", sm: "none" }}>
                    <GiHamburgerMenu size="35" color="#1A202C" />
                </Box> */}
      </Container>
    </Box>
  );
};

export default Navbar;
