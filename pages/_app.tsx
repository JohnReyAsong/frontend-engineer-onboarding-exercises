import { Box, ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>

    <Layout>
      <Box background="gray.50" >
        <Component {...pageProps} />
      </Box>

    </Layout>
  </ChakraProvider>
);

export default App;
