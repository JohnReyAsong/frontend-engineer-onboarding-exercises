import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, FormControl, FormLabel, Image, Input, Spacer, Stack, Text, Textarea } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { BsImage } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';





const EditProductComponent: FC = () => (
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
          <Box borderWidth="3px" backgroundColor="black" cursor="move" display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="246px" width={{ base: "auto", lg: "440px" }} borderStyle="dashed"
            borderRadius="lg"
          >
            <Image opacity={0.7} src="/product.png" pos="absolute" zIndex={0} borderRadius="lg" width="100%" minHeight="244.3px" maxHeight="244.3px" p={1} />

            <Input type="file" opacity={0} pos="absolute" height="85%" />

            <Box zIndex={1} display="flex" flexDirection="column" alignItems="center" >
              <BsImage size="30px" color="white" />
              <Box display="flex" mt={3}>
                <Text color="purple.500" background="white" borderRadius="4px" fontWeight="bold" px={1}>Upload a file</Text> <Text color="white">&nbsp; or drag and drop</Text>
              </Box>
              <Text color="white" fontSize="14px">PNG, JPG, GIF up to 10mb</Text>
            </Box>
          </Box>
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

export default EditProductComponent;
