import React from "react";
import DoubleLineGraph from "./Graphs/DoubleLineGraph";
import { Box, Flex, Heading } from "@chakra-ui/react";
import DataPoint from "@/data/DataPoint";

interface GraphPanelProps {
  cwtData: (number | undefined)[];
  priceData: (number | undefined)[];
}

// ...this will likely need to be refactored to display different types of graphs: double line, double bar for sure
const GraphPanel: React.FC<GraphPanelProps> = ({ cwtData, priceData }) => {
  // TODO: change the graph to accept data points as pairs (?) idk if even possible with 2 lines
  // ex: [ { price: X, cwt: Y }, ... ]
  const cwtData2: number[] = [1850, 1850, 1800, 1650, 1600, 1500, 1450, 1600, 1650, 1550];
  const cwtColor: string = "#00b8e2";
  const priceData2: number[] = [20.50, 20.50, 21, 21, 21.75, 22, 22, 22.50, 22.50, 23];
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
          data1={cwtData2} data2={priceData2}
          color1={cwtColor} color2={priceColor}
          name1="CWT" name2="Avg. Price"
        />
      </Box>
    </Flex>
  )
};

export default GraphPanel;