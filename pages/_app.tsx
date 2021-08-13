import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const httpLink = createHttpLink({
  uri: 'https://frontend-engineer-onboarding-api-thxaa.ondigitalocean.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        ,
      </Layout>
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
