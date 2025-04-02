import React from "react";
import DoubleLineGraph from "./Graphs/DoubleLineGraph";
import { Box } from "@chakra-ui/react";

const GraphPanel: React.FC = () => {
  const cwtData: number[] = [1500, 1450, 1600, 1650, 1675];
  const cwtColor: string = "#123456";
  const priceData: number[] = [22, 22, 22.50, 22.50, 23];
  const priceColor: string = "#654321";

  return (
    <Box width="100%">
      <DoubleLineGraph data1={cwtData} data2={priceData} color1={cwtColor} color2={priceColor} name1="CWT" name2="Avg. Price" />
    </Box>
  )
};

export default GraphPanel;