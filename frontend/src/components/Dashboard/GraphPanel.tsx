import React from "react";
import DoubleLineGraph from "./Graphs/DoubleLineGraph";
import { Box, Flex, Heading } from "@chakra-ui/react";

interface GraphPanelProps {
  cwtData: (number | undefined)[];
  priceData: (number | undefined)[];
}

// ...this will likely need to be refactored to display different types of graphs: double line, double bar for sure
const GraphPanel: React.FC<GraphPanelProps> = ({ cwtData, priceData }) => {
  const cwtColor: string = "#00b8e2";
  const priceColor: string = "#39b45a";

  return (
    <Flex width="100%"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      p={1}
      bg="white"
      boxShadow="sm"
      direction="column"
      alignItems="center"
    >
      <Heading justifyContent="center" p={2} textDecoration="underline">Weekly Changes</Heading>
      <Box width="100%">
        <DoubleLineGraph
          data1={cwtData} data2={priceData}
          color1={cwtColor} color2={priceColor}
          name1="CWT" name2="Avg. Price"
        />
      </Box>
    </Flex>
  )
};

export default GraphPanel;