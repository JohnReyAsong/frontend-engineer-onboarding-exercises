import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';
import { FC } from 'react';

const SkeletonCard: FC = ({}) => {
  return (
    <Box width="290px" p={5} height="424px" borderRadius="lg" boxShadow="base" background="white">
      <Skeleton height="145" />
      <SkeletonText mt="5" noOfLines={7} spacing="4" mb={5} />
      <Skeleton height="10" />
    </Box>
  );
};

export default SkeletonCard;
