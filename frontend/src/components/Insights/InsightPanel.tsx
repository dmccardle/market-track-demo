import { Box, Grid, Text } from "@chakra-ui/react";
import InsightSegment from "./InsightSegment";

const InsightPanel: React.FC = () => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      p={6}
      w="md" // Adjust width as needed
      bg="white"
      boxShadow="sm"
    >
      <Grid templateColumns="1fr 1fr" gap={4} mb={3}>
        <Text fontWeight="bold" textAlign="center" textDecoration="underline">
          Quantity
        </Text>
        <Text fontWeight="bold" textAlign="center" textDecoration="underline">
          Avg. Price
        </Text>
      </Grid>

      <InsightSegment label="This week" leftValue="1,500" rightValue="$20.00" />
      <InsightSegment label="Change from last week" leftValue="+100" rightValue="+ $0.50" />
      <InsightSegment label="Crop year average" leftValue="1,450" rightValue="$18.75" />
    </Box>
  );
};

export default InsightPanel;
