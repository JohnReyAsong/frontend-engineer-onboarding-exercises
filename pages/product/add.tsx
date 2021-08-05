import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, FormControl, FormLabel, Grid, GridItem, Input, Spacer, Textarea } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';




const Add: FC = () => (
    <Flex height="100vh" background="gray.50" direction="column" pt={40} px={80}>
        <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />} >
            <BreadcrumbItem>
                <BreadcrumbLink href="/product/list">Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="/product/add">Add product</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>

        <Grid
            mt={8}
            templateRows="70px auto"
            templateColumns="490px auto"
            gap={6}
            background="white"
            py={10}
            px={8}
            boxShadow="base"
            borderRadius="lg"

        >
            <GridItem overflow="hidden" colSpan={1} rowSpan={2}>
                <FormControl id="photo" mb={4}>
                    <FormLabel fontSize="16px">Photo</FormLabel>
                    <Box borderWidth="3px" height="260px" borderStyle="dashed"
                        borderRadius="lg"
                    />
                </FormControl>
            </GridItem>

            <GridItem display="flex" colSpan={1}>
                <FormControl id="title" mb={4}>
                    <FormLabel fontSize="16px">Title</FormLabel>
                    <Input focusBorderColor="purple.500" type="text" placeholder="Enter Title" />
                </FormControl>

            </GridItem>
            <GridItem colSpan={1} borderWidth="3">
                <FormControl id="description" mb={4}>
                    <FormLabel fontSize="16px">Description</FormLabel>
                    <Textarea focusBorderColor="purple.500" type="text" placeholder="Enter Description" />
                </FormControl>

                <Box display="flex" >
                    <Spacer />
                    <NextLink href="/product/list" >
                        <Button mt={8} mr={5} px={16} fontWeight="bold">Cancel</Button>
                    </NextLink >
                    <Button mt={8} colorScheme="purple" px={16} fontWeight="bold">Submit</Button>
                </Box>
            </GridItem>
        </Grid>



    </Flex>
);

export default Add;
