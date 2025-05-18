import { Box, Text, Grid } from "@chakra-ui/react";
import InsightBlock from "./InsightBlock";

interface InsightSegmentProps {
  label: string;
  leftValue: string;
  leftVariant?: string;
  rightValue: string;
  rightVariant?: string;
}

const InsightSegment: React.FC<InsightSegmentProps> = ({ label, leftValue, leftVariant, rightValue, rightVariant }) => {
  return (
    <Box mb={4}>
      <Text fontWeight="semibold" mb={2}>
        {label}
      </Text>
      <Grid templateColumns="1fr 1fr" gap={4}>
        <InsightBlock value={leftValue} variant={leftVariant} />
        <InsightBlock value={rightValue} variant={rightVariant} />
      </Grid>
    </Box>
  );
};

export default InsightSegment;
