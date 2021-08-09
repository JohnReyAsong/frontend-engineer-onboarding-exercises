import {
    Box, Button, Heading, IconButton, Image, Menu,
    MenuButton, MenuItem, MenuList, Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { GoKebabVertical } from 'react-icons/go';
import { MdShoppingCart } from 'react-icons/md';


const ProductCard: FC = () => (
    <Box width="290px" height="424px" boxShadow="base" borderRadius="lg" overflow="hidden" background="white" cursor="pointer" _hover={{ boxShadow: "xl" }}>
        <Box zIndex={1} pos="absolute" padding={5} display="flex" >
            <Box pos="relative" left="220px">
                <Menu>
                    <MenuButton
                        as={IconButton}
                        size="sm"
                        aria-label="Options"
                        icon={<GoKebabVertical size="20px" />}
                        borderRadius="50%"


                    />
                    <MenuList>
                        <MenuItem >
                            Edit
                        </MenuItem>
                        <MenuItem >
                            Delete
                        </MenuItem>

                    </MenuList>
                </Menu>
            </Box>
        </Box>

        <Image src="/product.png" />



        <Box p={5} >
            <Heading size="md" >ReactJS</Heading>
            <Text my={4}>
                Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </Text>
            <NextLink href="/product/view" >

                <Button _hover={{ bg: "purple.100" }} leftIcon={<MdShoppingCart />} color="purple.600" width="100%" fontWeight="bold" background="purple.50">
                    Add to cart
                </Button>
            </NextLink>

        </Box>
    </Box>
);

export default ProductCard
