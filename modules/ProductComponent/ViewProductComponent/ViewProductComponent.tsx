import { useQuery } from '@apollo/client';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { PRODUCT_DETAILS } from 'lib/queries/query';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaChevronRight, FaEdit } from 'react-icons/fa';
import { HiTrash } from 'react-icons/hi';
import { MdShoppingCart } from 'react-icons/md';

const ViewProductComponent: FC = () => {
  const router = useRouter();
  const productId = router.query.id;
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <Container maxW="container.xl" py={{ base: 20, lg: 40 }}>
      <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />}>
        <BreadcrumbItem>
          <NextLink href="/product/list">
            <BreadcrumbLink>Products</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NextLink href={`/product/list/${productDetails?.id}`}>
            <BreadcrumbLink>{productDetails?.name}</BreadcrumbLink>
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
          <Image src="/product.png" borderRadius="lg" width="650px" height="auto" />
          <Button
            _hover={{ bg: 'purple.100' }}
            leftIcon={<MdShoppingCart />}
            color="purple.600"
            width="100%"
            fontWeight="bold"
            background="purple.50"
            my={4}
          >
            Add to cart
          </Button>
        </Box>

        <Box w="100%">
          <Box display="flex">
            <Heading size="lg">{productDetails?.name}</Heading>
            <Spacer />
            <NextLink href={`/product/edit/${productDetails?.id}`}>
              <IconButton aria-label="Edit product" icon={<FaEdit />} />
            </NextLink>
            <IconButton aria-label="Delete product" ml={4} icon={<HiTrash />} onClick={onOpen} />
          </Box>
          <Text my={4}>{productDetails?.description}</Text>
        </Box>
      </Stack>

      {/* Modal */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this product? You can't undp this action afterwards.</Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ViewProductComponent;
