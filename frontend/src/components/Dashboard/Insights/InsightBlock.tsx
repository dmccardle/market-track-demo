import { Box, Text } from "@chakra-ui/react";

interface InsightBlockProps {
  value: string;
  variant?: string;
}

const getVariantColor = (variant?: string) => {
  switch(variant) {
    case 'positive':
      return 'green';
    case 'negative':
      return 'red';
    default:
      // TODO: make this use the default text theme colour
      return 'black';
  };
}

const InsightBlock: React.FC<InsightBlockProps> = ({ value, variant }) => {
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
      <Text color={getVariantColor(variant)}>{value}</Text>
    </Box>
  );
};

export default InsightBlock;
