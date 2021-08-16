import { useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { PRODUCT_DETAILS } from 'lib/queries/query';
import { EditProduct } from 'lib/schema/validation';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BsImage } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { UpdateProductBody, UpdateProductInput } from 'types/types';
import { EDIT_PRODUCT } from '../../../lib/queries/mutation';

// interface UpdateInput {
//   id: string
//   name: string
//   description: string
// }

const EditProductComponent: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const productId = router.query.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProductBody>({ resolver: yupResolver(EditProduct) });
  const { data } = useQuery(PRODUCT_DETAILS, {
    variables: {
      filter: {
        id: {
          eq: productId,
        },
      },
    },
  });

  const productDetails = data?.products?.edges[0].node;

  const [editProduct] = useMutation(EDIT_PRODUCT, {
    onCompleted: () => {
      toast({
        title: 'Product Edited Successfully',
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
    <Container maxW="container.xl" height={{ base: '100%', lg: '100vh' }} py={{ base: 20, lg: 40 }} mb={5}>
      <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/product/list">Products</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/product/edit">Edit product</BreadcrumbLink>
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
              backgroundColor="black"
              cursor="move"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="246px"
              width={{ base: 'auto', lg: '440px' }}
              borderStyle="dashed"
              borderRadius="lg"
            >
              <Image
                opacity={0.7}
                src="/product.png"
                pos="absolute"
                zIndex={0}
                borderRadius="lg"
                width="100%"
                minHeight="244.3px"
                maxHeight="244.3px"
                p={1}
              />

              <Input type="file" opacity={0} pos="absolute" height="85%" />

              <Box zIndex={1} display="flex" flexDirection="column" alignItems="center">
                <BsImage size="30px" color="white" />
                <Box display="flex" mt={3}>
                  <Text color="purple.500" background="white" borderRadius="4px" fontWeight="bold" px={1}>
                    Upload a file
                  </Text>{' '}
                  <Text color="white">&nbsp; or drag and drop</Text>
                </Box>
                <Text color="white" fontSize="14px">
                  PNG, JPG, GIF up to 10mb
                </Text>
              </Box>
            </Box>
          </FormControl>
        </Box>
        <Box w="100%">
          <form
            onSubmit={handleSubmit((data: UpdateProductInput): void => {
              editProduct({
                variables: {
                  input: {
                    id: productDetails.id,
                    body: data,
                  },
                },
              })
                .then()
                .catch((err) => err);
            })}
          >
            <FormControl id="title" mb={4}>
              <FormLabel fontSize="16px">Title</FormLabel>
              <Input
                focusBorderColor="purple.500"
                type="text"
                defaultValue={productDetails?.name}
                placeholder="Enter Title"
                {...register('name')}
              />
              <Text color="red" fontSize="14px">
                {errors.name?.message}
              </Text>
            </FormControl>

            <FormControl id="description" mb={4}>
              <FormLabel fontSize="16px">Description</FormLabel>
              <Textarea
                focusBorderColor="purple.500"
                type="text"
                defaultValue={productDetails?.description}
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
              <Button mt={8} colorScheme="purple" type="submit" px={16} fontWeight="bold">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default EditProductComponent;
