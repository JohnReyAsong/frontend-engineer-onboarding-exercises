import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, FormControl, FormLabel, Input, Spacer, Stack, Textarea } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';




const Edit: FC = () => (
    <Container maxW="container.xl" height="100vh" py={{ base: 20, lg: 40 }} mb={5}>
        <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />} >
            <BreadcrumbItem>
                <BreadcrumbLink href="/product/list">Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="/product/edit">Edit product</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>

        <Stack
            boxShadow="base"
            direction={{ base: "column", lg: "row" }}
            borderRadius="lg"
            mt={8}
            background="white"
            spacing={10}
            p={5}

        >
            <Box >
                <FormControl id="photo" mb={4}>
                    <FormLabel fontSize="16px">Photo</FormLabel>
                    <Box borderWidth="3px" height="260px" width={{ base: "auto", lg: "450px" }} borderStyle="dashed"
                        borderRadius="lg"
                    />
                </FormControl>
            </Box>
            <Box w="100%">
                <FormControl id="title" mb={4}>
                    <FormLabel fontSize="16px">Title</FormLabel>
                    <Input focusBorderColor="purple.500" type="text" placeholder="Enter Title" />
                </FormControl>

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
            </Box>
        </Stack>



    </Container>
);

export default Edit;
