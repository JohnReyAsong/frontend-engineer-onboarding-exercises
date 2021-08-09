import {
    Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, IconButton, Image, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { FaChevronRight, FaEdit } from 'react-icons/fa';
import { HiTrash } from 'react-icons/hi';
import { MdShoppingCart } from 'react-icons/md';

const View: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW="container.xl" py={{ base: 20, lg: 40 }} height={{ base: "", sm: "", md: "", lg: "100vh" }} >
            <Breadcrumb spacing="8px" color="gray.400" separator={<FaChevronRight />} >
                <BreadcrumbItem>
                    <NextLink href="/product/list">
                        <BreadcrumbLink >Products</BreadcrumbLink>

                    </NextLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <NextLink href="/product/view">
                        <BreadcrumbLink >ReactJS</BreadcrumbLink>
                    </NextLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Stack
                boxShadow="base"
                direction={{ base: "column", lg: "row" }}
                borderRadius="lg"
                mt={8}
                background="white"
                spacing={10}
                p={5}

            >
                <Box>
                    <Image src="/product.png" borderRadius="lg" />
                    <Button _hover={{ bg: "purple.100" }} leftIcon={<MdShoppingCart />} color="purple.600" width="100%" fontWeight="bold" background="purple.50" my={4} >
                        Add to cart
                    </Button>
                </Box>

                <Box w="100%">
                    <Box display="flex">

                        <Heading size="lg">ReactJS</Heading>
                        <Spacer />
                        <NextLink href="/product/edit" >
                            <IconButton aria-label="Edit product" icon={<FaEdit />} />
                        </NextLink>
                        <IconButton aria-label="Delete product" ml={4} icon={<HiTrash />} onClick={onOpen} />
                    </Box>
                    <Text my={4}>
                        Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                        Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                        Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                        Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
                        Repundiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.

                    </Text>
                </Box>

            </Stack>

            {/* Modal */}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure you want to delete this product? You can't undp this action afterwards.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="red">Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </Container>

    )
};

export default View;
