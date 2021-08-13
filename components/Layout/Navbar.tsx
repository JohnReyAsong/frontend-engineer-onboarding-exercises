import {
  Avatar,
  Box,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { userLogout } from '../../store/userAuthentication';

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state: RootState) => state.userAuthenticationReducer.isLoggedIn);
  const router = useRouter();
  const isProductListPath = router.asPath === '/product/list';

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
            <Text fontSize="14px" textAlign="center">
              Products
            </Text>
          </Box>
        </NextLink>

        <Spacer />

        {!isLoggedin ? (
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
        ) : (
          <Box display="flex" alignItems="center">
            <HiOutlineBell size="24px" color="#9CA3AF" />
            <Box ml={5}>
              <Menu>
                <MenuButton as={Avatar} style={{ height: '30px', width: '30px' }} />
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem
                      onClick={(): void => {
                        dispatch(userLogout());
                        setTimeout(() => {
                          void router.push('/login');
                        });
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
