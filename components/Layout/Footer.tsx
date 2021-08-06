import { Box, Container, Link, Spacer, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaDribbble, FaInstagram } from 'react-icons/fa'
import { RiFacebookCircleFill } from 'react-icons/ri'



const Footer: FC = ({ }) => {

    return (
        <Box py={5} background="white">
            <Container maxW="container.xl" display="flex" >

                <Text color="gray.400" textAlign="center" >© 2020 HOV Onboarding. All rights reserved.</Text>
                <Spacer />
                <Box color="gray.400" display={{ base: "none", sm: "flex" }}>
                    <Link href="https://facebook.com" isExternal>
                        <RiFacebookCircleFill size="23" />
                    </Link>
                    <Link href="facebook.com" isExternal mx={5} >
                        <FaInstagram size="23" />
                    </Link><Link href="facebook.com" isExternal>
                        <AiOutlineTwitter size="23" />
                    </Link><Link href="facebook.com" isExternal mx={5}>
                        <AiFillGithub size="23" />
                    </Link>

                    <Link href="facebook.com" isExternal >
                        <FaDribbble size="23" />
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
