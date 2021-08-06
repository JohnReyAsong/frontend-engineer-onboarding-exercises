import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, FormControl, FormLabel, Grid, GridItem, Input, Spacer, Textarea } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';




const Add: FC = () => (
    <Container maxW="container.xl" py={{ base: 20, lg: 40 }}>
        <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />} >
            <BreadcrumbItem>
                <NextLink href="/product/list">
                    <BreadcrumbLink >Products</BreadcrumbLink>

                </NextLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <NextLink href="/product/add">
                    <BreadcrumbLink >Add product</BreadcrumbLink>
                </NextLink>
            </BreadcrumbItem>
        </Breadcrumb>

        <Grid
            boxShadow="base"
            borderRadius="lg"
            // mt={8}
            templateRows={{ lg: "70px auto", base: "" }}
            templateColumns={{ lg: "490px auto", base: "" }}
            gap={6}
            background="white"
            p={5}



        >
            <GridItem colSpan={1} rowSpan={2}>
                <FormControl id="photo" mb={4}>
                    <FormLabel fontSize="16px">Photo</FormLabel>
                    <Box borderWidth="3px" height="260px" borderStyle="dashed"
                        borderRadius="lg"
                    />
                </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
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



    </Container>
);

export default Add;
