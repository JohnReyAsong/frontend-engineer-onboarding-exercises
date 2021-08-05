import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { MdShoppingCart } from 'react-icons/md';

const ProductCard: FC = () => (
    <NextLink href="/product/view" >
        <Box width="290px" height="424px" boxShadow="base" borderRadius="lg" overflow="hidden" background="white" cursor="grab" _hover={{ boxShadow: "xl" }}>
            <Image src="/product.png" />
            <Box p={5} >
                <Heading size="md" >ReactJS</Heading>
                <Text my={4}>
                    Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                </Text>

                <Button _hover={{ bg: "purple.100" }} leftIcon={<MdShoppingCart />} color="purple.600" width="100%" fontWeight="bold" background="purple.50">
                    Add to cart
                </Button>
            </Box>
        </Box>
    </NextLink>
);

export default ProductCard
