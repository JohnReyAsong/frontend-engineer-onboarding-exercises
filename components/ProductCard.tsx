import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { GoKebabVertical } from 'react-icons/go';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ProductDetails {
  id: number;
  name: string;
  description: string;
}

const ProductCard: FC<ProductDetails> = ({ name, description }) => {
  const isLoggedin = useSelector((state: RootState) => state.userAuthenticationReducer.isLoggedIn);

  return (
    <Box
      width="290px"
      height="424px"
      boxShadow="base"
      borderRadius="lg"
      overflow="hidden"
      background="white"
      cursor="pointer"
      _hover={{ boxShadow: 'xl' }}
    >
      <Box zIndex={1} pos="absolute" padding={5} display="flex" width="290px" justifyContent="end">
        <Spacer />
        {isLoggedin ? (
          <Box>
            <Menu>
              <MenuButton as={IconButton} size="sm" icon={<GoKebabVertical size="20px" />} borderRadius="50%" />
              <MenuList>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          ''
        )}
      </Box>

      <Image src="/product.png" />

      <Box p={5}>
        <Heading size="md">{name}</Heading>
        <Box minHeight="120px" maxHeight="120px" my="16px">
          <Text my={4} textOverflow="ellipsis" noOfLines={5}>
            {description.substr(0, 180)}
          </Text>
        </Box>
        <NextLink href="/product/view">
          <Button
            _hover={{ bg: 'purple.100' }}
            leftIcon={<MdShoppingCart />}
            color="purple.600"
            width="100%"
            fontWeight="bold"
            background="purple.50"
          >
            Add to cart
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default ProductCard;
