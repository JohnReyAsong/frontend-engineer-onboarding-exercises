import { Box, ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Box background="gray.50" >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Box>
  </ChakraProvider>
);

export default App;
