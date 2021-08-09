import { Box, Button, Container, Divider, Flex, Heading, Spacer, Wrap } from '@chakra-ui/react';
import ProductCard from '@components/ProductCard';
import NextLink from 'next/link';
import { FC } from 'react';
import { BsPlus } from 'react-icons/bs';




const ProductListComponent: FC = () => (
  <Container maxW="container.xl" alignItems="center" background="gray.50" py={{ base: 20, lg: 40 }}>
    <Flex display="flex">
      <Box>
        <Heading size="lg">Products</Heading>
      </Box>
      <Spacer />
      <Box>
        <NextLink href="/product/add">
          <Button leftIcon={<BsPlus size="20" />} colorScheme="purple" fontWeight="bold">
            Add Product
          </Button>
        </NextLink>
      </Box>

    </Flex>

    <Divider mb={8} mt={3} />

    <Wrap spacing="29px" justify="center" >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Wrap>

    <Divider mt={8} />
  </Container>

);

export default ProductListComponent;
