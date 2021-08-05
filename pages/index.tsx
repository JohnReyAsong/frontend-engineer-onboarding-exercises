import { Box, Button, Divider, Flex, Heading, Spacer, Wrap } from '@chakra-ui/react';
import ProductCard from '@components/ProductCard';
import { FC } from 'react';
import { BsPlus } from 'react-icons/bs';



const Home: FC = () => (
  <Flex height="100%" background="gray.50" direction="column" py={40} px={80}>
    <Flex display="flex">
      <Box>
        <Heading size="lg">Products</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button leftIcon={<BsPlus size="20" />} colorScheme="purple" fontWeight="bold">
          Add Product
        </Button>
      </Box>

    </Flex>

    <Divider mb={8} mt={3} />
    <Wrap spacing="34px">
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

  </Flex >
);

export default Home;
