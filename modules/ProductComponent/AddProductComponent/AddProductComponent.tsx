import { useMutation } from '@apollo/client';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddProduct } from 'lib/schema/validation';
import NextLink from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BsImage } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { CreateProductInput } from 'types/types';
import { ADD_PRODUCT } from '../../../lib/queries/mutation';

const AddProductComponent: FC = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductInput>({ resolver: yupResolver(AddProduct) });
  const [addProduct] = useMutation(ADD_PRODUCT, {
    onCompleted: () => {
      toast({
        title: 'Product Added Successfully',
        status: 'success',
        isClosable: true,
        position: 'bottom-right',
      });
    },
    onError: (e) => {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
      });
    },
  });

  return (
    <Container maxW="container.xl" height="100vh" py={{ base: 20, lg: 40 }} mb={5}>
      <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />}>
        <BreadcrumbItem>
          <NextLink href="/product/list">
            <BreadcrumbLink>Products</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href="/product/add">
            <BreadcrumbLink>Add product</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack
        boxShadow="base"
        direction={{ base: 'column', lg: 'row' }}
        borderRadius="lg"
        mt={8}
        background="white"
        spacing={10}
        p={5}
      >
        <Box>
          <FormControl id="photo" mb={4}>
            <FormLabel fontSize="16px">Photo</FormLabel>
            <Box
              borderWidth="3px"
              cursor="move"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="260px"
              width={{ base: 'auto', lg: '440px' }}
              borderStyle="dashed"
              borderRadius="lg"
            >
              <BsImage size="30px" color="#9CA3AF" />
              <Input type="file" opacity={0} height="100%" pos="absolute" />
              <Box display="flex" mt={3}>
                <Text color="purple.400" fontWeight="bold">
                  Upload a file &nbsp;
                </Text>{' '}
                <Text>or drag and drop</Text>
              </Box>
              <Text color="gray" fontSize="14px">
                PNG, JPG, GIF up to 10mb
              </Text>
            </Box>
          </FormControl>
        </Box>
        <Box w="100%">
          <form
            onSubmit={handleSubmit((data: CreateProductInput): void => {
              addProduct({ variables: { input: data } })
                .then()
                .catch((err) => err);
            })}
          >
            <FormControl id="title" mb={4}>
              <FormLabel fontSize="16px">Title</FormLabel>
              <Input focusBorderColor="purple.500" type="text" placeholder="Enter Title" {...register('name')} />
              <Text color="red" fontSize="14px">
                {errors.name?.message}
              </Text>
            </FormControl>

            <FormControl id="description" mb={4}>
              <FormLabel fontSize="16px">Description</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="text"
                placeholder="Enter Description"
                {...register('description')}
              />
              <Text color="red" fontSize="14px">
                {errors.description?.message}
              </Text>
            </FormControl>

            <Box display="flex">
              <Spacer />
              <NextLink href="/product/list">
                <Button mt={8} mr={5} px={16} fontWeight="bold">
                  Cancel
                </Button>
              </NextLink>
              <Button mt={8} colorScheme="purple" px={16} fontWeight="bold" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddProductComponent;
