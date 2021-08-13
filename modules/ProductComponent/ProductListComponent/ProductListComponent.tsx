import { useQuery } from '@apollo/client';
import { Box, Button, Container, Divider, Flex, Heading, Spacer, Wrap } from '@chakra-ui/react';
import ProductCard from '@components/ProductCard';
import SkeletonCard from '@components/SkeletonCard';
import NextLink from 'next/link';
import { FC } from 'react';
import { BsPlus } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { PRODUCT_LIST } from '../../../lib/queries/query';
import { RootState } from '../../../store/store';

const ProductListComponent: FC = () => {
  const isLoggedin = useSelector((state: RootState) => state.userAuthenticationReducer.isLoggedIn);
  const { loading, data } = useQuery(PRODUCT_LIST);
  let skeletonLoading;
  if (loading) {
    skeletonLoading = Array.from({ length: 16 }).map((x, index) => <SkeletonCard key={index} />);
  }

  return (
    <Container maxW="container.xl" alignItems="center" background="gray.50" py={{ base: 20, lg: 40 }}>
      <Flex display="flex">
        <Box>
          <Heading size="lg">Products</Heading>
        </Box>
        <Spacer />
        {isLoggedin ? (
          <Box>
            <NextLink href="/product/add">
              <Button leftIcon={<BsPlus size="20" />} colorScheme="purple" fontWeight="bold">
                Add Product
              </Button>
            </NextLink>
          </Box>
        ) : (
          ''
        )}
      </Flex>

      <Divider mb={8} mt={3} />

      <Wrap spacing="29px" justify="center">
        {skeletonLoading}
        {data?.products.edges.map((product) => (
          <ProductCard
            key={product.node.id}
            id={product.node.id}
            name={product.node.name}
            description={product.node.description}
          />
        ))}
      </Wrap>

      <Divider mt={8} />
    </Container>
  );
};

export default ProductListComponent;
