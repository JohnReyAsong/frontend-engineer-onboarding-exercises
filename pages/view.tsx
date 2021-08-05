import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FaChevronRight, FaEdit } from 'react-icons/fa';
import { HiTrash } from 'react-icons/hi';
import { MdShoppingCart } from 'react-icons/md';



const ViewProduct: FC = () => (
    <Flex height="100vh" background="gray.50" direction="column" pt={40} px={80}>
        <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />} >
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="">ReactJS</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>

        <Grid
            mt={8}
            templateRows="20px auto"
            templateColumns="490px auto"
            gap={6}

        >
            <GridItem overflow="hidden" colSpan={1} rowSpan={2}>
                <Image src="/product.png" borderRadius="lg" />
                <Button _hover={{ bg: "purple.100" }} leftIcon={<MdShoppingCart />} color="purple.600" width="100%" fontWeight="bold" background="purple.50" mt={6}>
                    Add to cart
                </Button>
            </GridItem>

            <GridItem display="flex" colSpan={1}>
                <Box>
                    <Heading size="lg">ReactJS</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button>
                        <FaEdit />
                    </Button>

                    <Button ml={4}>
                        <HiTrash />
                    </Button>
                </Box>
            </GridItem>
            <GridItem colSpan={1} borderWidth="3">
                <Text my={4}>
                    Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.

                </Text>
            </GridItem>
        </Grid>



    </Flex>
);

export default ViewProduct;
