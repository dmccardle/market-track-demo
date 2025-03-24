import { Box, Text } from "@chakra-ui/react";

interface InsightBlockProps {
  value: string;
}

const InsightBlock: React.FC<InsightBlockProps> = ({ value }) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      borderRadius="md"
      p={4}
      textAlign="center"
      fontSize="lg"
      fontWeight="bold"
      bg="gray.50"
      w="100%" // Ensures equal width inside the grid
    >
      <Text>{value}</Text>
    </Box>
  );
};

export default InsightBlock;
