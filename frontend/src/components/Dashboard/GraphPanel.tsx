import React from "react";
import DoubleLineGraph from "./Graphs/DoubleLineGraph";
import { Box } from "@chakra-ui/react";

const GraphPanel: React.FC = () => {
  const cwtData: number[] = [1500, 1450, 1600, 1650, 1550];
  const cwtColor: string = "#39b45a";
  const priceData: number[] = [22, 22, 22.50, 22.50, 23];
  const priceColor: string = "#b43993";

  return (
    <Box width="100%"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      p={6}
      bg="white"
      boxShadow="sm"
    >
      <DoubleLineGraph
        data1={cwtData} data2={priceData}
        color1={cwtColor} color2={priceColor}
        name1="CWT" name2="Avg. Price"
      />
    </Box>
  )
};

export default GraphPanel;