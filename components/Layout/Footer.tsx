import { Box, Link, Spacer, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaDribbble, FaInstagram } from 'react-icons/fa'
import { RiFacebookCircleFill } from 'react-icons/ri'



const Footer: FC = ({ }) => (
    <Box display="flex" background="white" px={80} py={5} >
        <Text color="gray.400">© 2020 HOV Onboarding. All rights reserved.</Text>
        <Spacer />
        <Box display="flex" color="gray.400">
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
    </Box>
)

export default Footer
