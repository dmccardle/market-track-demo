import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import InsightSegment from "./InsightSegment";

const InsightPanel: React.FC = () => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      p={6}
      width={{ base: "100%", md: "sm"}}
      bg="white"
      boxShadow="sm"
    >
      <Grid templateColumns="1fr 1fr" gap={4} mb={3}>
        <Heading textAlign="center" textDecoration="underline">
          Quantity
        </Heading>
        <Heading textAlign="center" textDecoration="underline">
          Avg. Price
        </Heading>
      </Grid>

      <InsightSegment label="This week" leftValue="1,500 cwt" rightValue="$20.00" />
      <InsightSegment label="Change from last week" leftValue="- 100 cwt" leftVariant="negative" rightValue="+ $0.50" rightVariant="positive" />
      <InsightSegment label="Crop year average" leftValue="1,450 cwt" rightValue="$18.75" />
    </Box>
  );
};

export default InsightPanel;
