import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: FC = ({ children }) => (
  <Flex direction="column" background="red">
    <Navbar />
    {children}
    <Box pos="absolute" bottom="0" width="100%">
      <Footer />
    </Box>
  </Flex>
)

export default Layout
