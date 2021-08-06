import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: FC = ({ children }) => (
  <Flex direction="column" background="gray.50">
    <Navbar />
    {children}
    <Box width="100%">
      <Footer />
    </Box>
  </Flex>
)

export default Layout
